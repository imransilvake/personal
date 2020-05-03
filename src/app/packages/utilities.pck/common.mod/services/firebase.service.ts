// angular
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

// app
import { FirebaseStorage } from '../../../../../app.config';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
	public photographyPageToken;

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
				.ref(`${FirebaseStorage.projects}/${galleryId}`)
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

	/**
	 * get photography gallery from firebase storage
	 */
	public async storageGetPhotographyGallery() {
		// Wait for the result of listAll() to settle,
		// and assign the fulfilled value to galleryData.
		// If the result of listAll() rejects, our code
		// throws, and we jump to the catch block.
		// Otherwise, this block continues to run.
		try {
			// payload
			const payload = this.photographyPageToken ?
				{ maxResults: 20, pageToken: this.photographyPageToken } :
				{ maxResults: 20 };

			// get gallery data from firebase
			const galleryData = await this._firebaseDatabase.storage
				.ref(`${FirebaseStorage.photography}`)
				.list(payload);

			// save page token
			if (galleryData.nextPageToken) {
				this.photographyPageToken = galleryData.nextPageToken;
			}

			// collect promises of all images
			const projectUrls = galleryData['items'].map(i =>
				this._firebaseDatabase.storage.ref(i.fullPath).getDownloadURL()
			);

			// return all promises
			return {
				data: Promise.all(projectUrls),
				isNextPageToken: galleryData.nextPageToken
			};
		} catch (e) {
			return new Promise((resolve) => { resolve([]); });
		}
	}
}
