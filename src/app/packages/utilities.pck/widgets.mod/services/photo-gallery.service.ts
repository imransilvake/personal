// angular
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// app
import { PhotoGalleryInterface } from '../interfaces/photo-gallery.interface';

@Injectable({ providedIn: 'root' })
export class PhotoGalleryService {
	public triggerPhotoGallery: Subject<PhotoGalleryInterface> = new Subject();
}
