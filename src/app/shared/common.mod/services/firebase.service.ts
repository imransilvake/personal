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
	 * fetch specific project gallery
	 * @param galleryId
	 */
	public getProjectGallery(galleryId) {
		const projectPath = this.projects.child(galleryId);
		return projectPath.listAll();
	}
}
