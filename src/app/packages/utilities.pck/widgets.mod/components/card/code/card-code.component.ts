// angular
import { Component, Input, OnInit } from '@angular/core';

// app
import { CodeBlockEnum } from '../../../enums/code-block.enum';

@Component({
	selector: 'app-card-code',
	templateUrl: './card-code.component.html',
	styleUrls: ['./card-code.component.scss']
})

export class CardCodeComponent implements OnInit {
	@Input() codeData = [];
	@Input() codeBlockSize = CodeBlockEnum.FIXED;

	public bsType = [CodeBlockEnum.AUTO, CodeBlockEnum.FIXED];
	public curlyBrackets = [];
	public conditionIfOrElseNext = false;

	ngOnInit() {
		// map data
		this.codeData = this.codeData.map(object => {
			// append class(es) in line
			const line = this.appendClassesInLine(object);

			// indent code line
			return this.indentCodeLine(line);
		});
	}

	/**
	 * append class(es) in line
	 *
	 * @param object
	 */
	public appendClassesInLine(object: string[]) {
		let text = object.text;
		const classes = object.classes;

		if (classes && classes.length > 0) {
			classes.forEach(cl => text = text.replace('<span>', `<span class="${cl}">`));
		}

		return text;
	}

	/**
	 * indent code line
	 *
	 * @param line
	 */
	public indentCodeLine(line) {
		const leftBracket = line.indexOf('{') !== -1;
		const rightBracket = line.indexOf('}') !== -1;
		const conditionIfOrElse = line.indexOf('if') !== -1 || line.indexOf('else') !== -1;

		// {
		if (leftBracket) {
			this.curlyBrackets.push(true);
		}

		// if or else
		if (conditionIfOrElse) {
			this.conditionIfOrElseNext = true;
		}

		// content inside brackets
		if (this.curlyBrackets.length > 0) {
			// nested
			if (this.curlyBrackets.length > 1 && (leftBracket || rightBracket)) {
				// case: { } <-- together
				// case: { or }
				const marginLeft = ((leftBracket && rightBracket) ? this.curlyBrackets.length - 1 : this.curlyBrackets.length) - 1;

				// }
				if (rightBracket) {
					this.curlyBrackets.pop();
				}

				return `<span class="ik-margin-left-${marginLeft * 20}">${line}</span>`;
			} else if (!leftBracket && !rightBracket) { // single
				return `<span class="ik-margin-left-${this.curlyBrackets.length * 20}">${line}</span>`;
			}
		} else if (!conditionIfOrElse && this.conditionIfOrElseNext) {
			this.conditionIfOrElseNext = false;
			return `<span class="ik-margin-left-20">${line}</span>`;
		}

		// }
		if (rightBracket) {
			this.curlyBrackets.pop();
		}

		return line;
	}
}
