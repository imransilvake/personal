// angular
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
	public projects;

	constructor(private _firebaseDatabase: AngularFireStorage) {
		this.projects = this._firebaseDatabase.storage.ref('projects');
	}

	/**
	 * fetch specific project gallery from firebase storage
	 * @param galleryId
	 */
	public async storageGetProjectGallery(galleryId) {
		// get gallery data from firebase
		const galleryData = await this.projects.child(galleryId).listAll();

		// collect promises of all images
		const projectUrls = galleryData['items'].map(i =>
			this.projects.child(galleryId).child(i.name).getDownloadURL());

		return Promise.all(projectUrls);
	}
}
