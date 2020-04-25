// angular
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
	constructor(private _firebaseDatabase: AngularFireStorage) {
	}

	/**
	 * get specific project gallery from firebase storage
	 * @param galleryId
	 */
	public async storageGetProjectGallery(galleryId) {
		// Wait for the result of listAll() to settle,
		// and assign the fulfilled value to galleryData.
		// If the result of listAll() rejects, our code
		// throws, and we jump to the catch block.
		// Otherwise, this block continues to run.
		try {
			// get gallery data from firebase
			const galleryData = await this._firebaseDatabase.storage
				.ref(`projects/${galleryId}`)
				.listAll();

			// collect promises of all images
			const projectUrls = galleryData['items'].map(i =>
				this._firebaseDatabase.storage.ref(i.fullPath).getDownloadURL()
			);

			// return all promises
			return Promise.all(projectUrls);
		} catch (e) {
			return new Promise((resolve) => { resolve([]); });
		}
	}
}
