// angular
import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs/internal/AsyncSubject';

// app
import { StorageTypeEnum } from '../enums/storage-type.enum';

@Injectable({ providedIn: 'root' })
export class StorageService {
	private memory: { [name: string]: AsyncSubject<any> } = {};

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
	 * delete item from local or session storage
	 * @param {string} key
	 * @param {StorageTypeEnum} storageType
	 */
	public remove(key: string, storageType?: StorageTypeEnum) {
		switch (storageType) {
			case StorageTypeEnum.PERSISTANT:
				if (this.exist(key, StorageTypeEnum.PERSISTANT)) {
					localStorage.removeItem(key);
				}
				break;

			case StorageTypeEnum.SESSION:
				if (this.exist(key, StorageTypeEnum.SESSION)) {
					sessionStorage.removeItem(key);
				}
				break;

			case StorageTypeEnum.MEMORY:
				if (this.exist(key, StorageTypeEnum.MEMORY)) {
					this.memory = {};
				}
				break;

			default:
				localStorage.removeItem(key);
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

	/**
	 * clear specific items from local or session storage
	 * @param {Array<string>} items
	 * @param {StorageTypeEnum} storageType
	 */
	public clearStorageItems(items: Array<string>, storageType: StorageTypeEnum) {
		items.forEach((item) => {
			this.remove(item, storageType);
		});
	}

	/**
	 * clear all localStorage items
	 */
	public static clearAllLocalStorageItems() {
		localStorage.clear();
	}

	/**
	 * clear all sessionStorage items
	 */
	public static clearAllSessionStorageItems() {
		sessionStorage.clear();
	}
}
