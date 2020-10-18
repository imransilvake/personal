// angular
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// app
import { StorageTypeEnum } from '../enums/storage-type.enum';

@Injectable({ providedIn: 'root' })
export class StorageService {
	private memory: { [name: string]: Subject<any> } = {};

	/**
	 * set item to local or session storage
	 * @param {string} key
	 * @param value
	 * @param {StorageTypeEnum} storageType
	 */
	public put(key: string, value: any, storageType?: StorageTypeEnum) {
		switch (storageType) {
			case StorageTypeEnum.PERSISTANT:
				localStorage.setItem(key, JSON.stringify(value));
				break;

			case StorageTypeEnum.SESSION:
				sessionStorage.setItem(key, JSON.stringify(value));
				break;

			case StorageTypeEnum.MEMORY:
				this.memory[key] = value;
				break;

			default:
				localStorage.setItem(key, JSON.stringify(value));
		}
	}

	/**
	 * get item from local or session storage
	 * @param {string} key
	 * @param {StorageTypeEnum} storageType
	 */
	public get(key: string, storageType?: StorageTypeEnum) {
		switch (storageType) {
			case StorageTypeEnum.PERSISTANT:
				if (this.exist(key, StorageTypeEnum.PERSISTANT)) {
					return JSON.parse(localStorage.getItem(key));
				}
				break;

			case StorageTypeEnum.SESSION:
				if (this.exist(key, StorageTypeEnum.SESSION)) {
					return JSON.parse(sessionStorage.getItem(key));
				}
				break;

			case StorageTypeEnum.MEMORY:
				if (this.memory) {
					return this.memory[key];
				}
				break;

			default:
				return JSON.parse(localStorage.getItem(key));
		}
	}

	/**
	 * check if item exist in local or session storage
	 * @param {string} key
	 * @param {StorageTypeEnum} storageType
	 * @returns {boolean}
	 */
	public exist(key: string, storageType?: StorageTypeEnum): boolean {
		switch (storageType) {
			case StorageTypeEnum.PERSISTANT:
				return localStorage.getItem(key) !== null;

			case StorageTypeEnum.SESSION:
				return sessionStorage.getItem(key) !== null;

			case StorageTypeEnum.MEMORY:
				return this.memory !== undefined;

			default:
				return localStorage.getItem(key) !== null;
		}
	}
}
