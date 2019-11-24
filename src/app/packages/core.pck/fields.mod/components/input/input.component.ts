// angular
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// app
import { faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
	public faIcon = [faEye, faEyeSlash, faTimes];

	@Input() control = new FormControl();

	@Input() showLabel = false;
	@Input() labelName;

	@Input() inputId = 'ham-input';
	@Input() inputName;
	@Input() inputType = 'text';
	@Input() inputPlaceHolder;
	@Input() autocomplete = 'off';

	@Input() showPassword = false;
	@Input() hidePassword = false;

	@Input() showHint = false;
	@Input() hintText;

	@Input() inputFocused = false;
	@Input() maxLength = 100;

	ngOnInit() {
		// case: show password on click
		this.inputType = this.showPassword ? 'text' : this.inputType;
	}
}
