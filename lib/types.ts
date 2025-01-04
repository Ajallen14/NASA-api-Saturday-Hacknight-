export interface RoverPhoto {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}

export interface RoverPhotoResponse {
  photos: RoverPhoto[];
}

export type RoverName = 'Curiosity' | 'Opportunity' | 'Spirit';
export type CameraType = 
  | 'FHAZ'  // Front Hazard Avoidance Camera
  | 'RHAZ'  // Rear Hazard Avoidance Camera
  | 'MAST'  // Mast Camera
  | 'CHEMCAM'  // Chemistry and Camera Complex
  | 'MAHLI'  // Mars Hand Lens Imager
  | 'MARDI'  // Mars Descent Imager
  | 'NAVCAM'  // Navigation Camera
  | 'PANCAM'  // Panoramic Camera
  | 'MINITES';  // Miniature Thermal Emission Spectrometer