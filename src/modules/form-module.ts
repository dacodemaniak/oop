import * as $ from 'jquery';

export class FormModule {
    protected fields: Array<JQuery>;
    protected form: JQuery;

    public constructor() {
        this.fields = new Array<JQuery>();
    }

    protected getFormFields(): void {
        const fieldTypes: any = {
            field: 'input',
            list: 'select'
        };

        for (const key in fieldTypes) {
            this.form.find(fieldTypes[key]).each((index: number, element: HTMLElement) => {
                this.fields.push($(element));
            });
        }
    }

    protected checkFormFill(event: any): boolean {
        let fieldValue: string;
        let hasError: boolean = false;

        for (let field of this.fields) {
            if (field.is('input')) {
                fieldValue = field.val().toString().trim();
            } else {
                fieldValue = field.children('option:selected').val().toString();
            }

            if (fieldValue == '') {
                hasError = true;
            }
        }
        // At the end...
        return hasError;
    }
}