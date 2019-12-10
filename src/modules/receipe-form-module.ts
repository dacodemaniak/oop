import * as $ from 'jquery';
import { FormModule } from './form-module';
import { Recette } from './../models/recette';

export class ReceipeFormModule extends FormModule {
    private recette: Recette;

    public constructor() {
        super();

        this.form = $('#receipe-form');
        this.getFormFields();

        this.setCreateButtonHandler();
        this.setFormKeyupHandler();
    }

    public getRecette(): Recette {
        return this.recette;
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

            // Make an instance of Recette
            this.recette = new Recette($('#receipe-title').val().toString());
            this.recette.setQuantity(parseInt($('#receipe-quantity').val().toString()));
            console.log('La recette from recette : ' + JSON.stringify(this.recette));
            
            // "Disable" the form components : fields and button
            $('#create-receipe').attr('disabled', 'disabled');
            $('#receipe-title').attr('disabled', 'disabled');
            $('#receipe-quantity').attr('disabled', 'disabled');
        }
    }


}