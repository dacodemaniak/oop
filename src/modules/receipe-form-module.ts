import * as $ from 'jquery';
import { FormModule } from './form-module';

export class ReceipeFormModule extends FormModule {
    public constructor() {
        super();

        this.form = $('#receipe-form');
        this.getFormFields();

        this.setCreateButtonHandler();
        this.setFormKeyupHandler();
    }

    private setCreateButtonHandler(): void {
        $('#create-receipe').on(
            'click',
            (event: any): void => this.toggleIngredientForm(event)
        );
    }

    public static resetForm(): void {
        $('#create-receipe').attr('disabled', 'disabled');
        $('#receipe-title').val('');
        $('#receipe-title').removeAttr('disabled');
        $('#receipe-quantity').val('');
        $('#receipe-quantity').removeAttr('disabled');
    }

    private setFormKeyupHandler(): void {
        this.form.on(
            'keyup change',
            (event: any): void => this.checkForm(event)
        );
    }
    
    private checkForm(event: any): void {
        if (
            !super.checkFormFill(event)
        ) {
            $('#create-receipe').removeAttr('disabled');
        } else {
            $('#create-receipe').attr('disabled', 'disabled');
        }
    }

    private toggleIngredientForm(event: any): void {
        if ($('#ingredient-form').hasClass('hidden-form')) {
            // Sets the span for the user
            $('#ingredient-form fieldset legend span').html($('#receipe-title').val().toString());
            // Have to remove the hidden-form class
            $('#ingredient-form').removeClass('hidden-form');
            $('#ingredient-form')
                .addClass('animated')
                .addClass('fadeInUp');
            // "Disable" the form components : fields and button
            $('#create-receipe').attr('disabled', 'disabled');
            $('#receipe-title').attr('disabled', 'disabled');
            $('#receipe-quantity').attr('disabled', 'disabled');
        }
    }


}