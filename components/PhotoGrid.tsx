'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RoverPhoto } from '@/lib/types';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Camera } from 'lucide-react';

interface PhotoGridProps {
  photos: RoverPhoto[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<RoverPhoto | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {photos.map((photo) => (
          <Card
            key={photo.id}
            className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedPhoto(photo)}
          >
            <CardContent className="p-0 relative group">
              <div className="relative aspect-square">
                <Image
                  src={photo.img_src}
                  alt={`Mars photo taken by ${photo.rover.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4" />
                  <span>{photo.camera.full_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{photo.earth_date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          {selectedPhoto && (
            <div className="space-y-4">
              <div className="relative aspect-video">
                <Image
                  src={selectedPhoto.img_src}
                  alt={`Mars photo taken by ${selectedPhoto.rover.name}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{selectedPhoto.camera.full_name}</Badge>
                  <Badge variant="outline">{selectedPhoto.rover.name}</Badge>
                  <Badge variant="outline">Sol {selectedPhoto.sol}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Taken on {selectedPhoto.earth_date} by {selectedPhoto.rover.name}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}