'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchRoverPhotos } from '@/lib/api';
import { RoverName, CameraType, RoverPhoto } from '@/lib/types';
import PhotoGrid from '@/components/PhotoGrid';
import Filters from '@/components/Filters';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle } from 'lucide-react';

export default function Home() {
  const [filters, setFilters] = useState({
    rover: 'Curiosity' as RoverName,
    sol: 1000,
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
  } = useInfiniteQuery({
    queryKey: ['roverPhotos', filters],
    queryFn: ({ pageParam = 1 }) =>
      fetchRoverPhotos({ ...filters, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.photos.length === 25 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const allPhotos = data?.pages.flatMap((page) => page.photos) ?? [];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Mars Rover Photos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore photographs taken by NASA's Mars rovers: Curiosity, Opportunity, and Spirit.
              Filter by rover, sol (Martian day), and camera type.
            </p>
          </div>

          <Filters onFilterChange={setFilters} />

          {isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Failed to fetch Mars rover photos. Please try again later.
              </AlertDescription>
            </Alert>
          )}

          {allPhotos.length > 0 ? (
            <>
              <PhotoGrid photos={allPhotos} />
              {hasNextPage && (
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => fetchNextPage()}
                    disabled={isFetching}
                    variant="outline"
                    size="lg"
                  >
                    {isFetching && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Load More Photos
                  </Button>
                </div>
              )}
            </>
          ) : !isFetching ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No photos found for the selected filters.
              </p>
            </div>
          ) : null}

          {isFetching && allPhotos.length === 0 && (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}