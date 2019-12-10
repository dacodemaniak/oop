import * as $ from 'jquery';
import { ReceipeFormModule } from './receipe-form-module';
import { FormModule } from './form-module';
import { QuantityProduct } from './../models/quantity-product';
import { Recette } from './../models/recette';

export class IngredientFormModule extends FormModule {

    private addAndContinue: JQuery = $('#add-and-next');
    private addAndStop: JQuery = $('#add-and-close');
    private checkAll: JQuery = $('#select-all');

    private receipe: ReceipeFormModule;

    // Dependency Injection : Ingredient depends on Receipe
    public constructor(receipe: ReceipeFormModule) {
        super();

        this.form = $('#ingredient-form');

        this.receipe = receipe; // Retrieve DI

        this.getFormFields();

        // Sets the event handlers
        this.setEventHandlers();
    }
    
    private setEventHandlers() {
        this.form.on(
            'keyup change',
            (event: any): void => this.checkForm(event)         
        );

        this.addAndContinue.on(
            'click',
            (event: any): void => this.addIngredient(event)
        );

        this.addAndStop.on(
            'click',
            (event: any): void => this.addIngredientAndStop(event)
        );

        this.checkAll.on(
            'click',
            (event: any): void => this.checkAllCheckboxes()
        );

        $('tbody').on(
            'click',
            '.ingredient-selection',
            (event: any) => this.manageSelectAllCheckboxes(event)
        )
    }
    
    private manageSelectAllCheckboxes(event: any): any {
        if ($('tbody .ingredient-selection:checked').length == $('tbody tr').length) {
            this.checkAll.prop('checked', true);
        } else {
            this.checkAll.prop('checked', false);
        }
    }

    private checkAllCheckboxes(): void {
        console.log('Check or uncheck');
        if (this.checkAll.is(':checked')) {
            $('tbody .ingredient-selection').prop('checked', true);
        } else {
            $('tbody .ingredient-selection').prop('checked', false);
        }
1    }

    private addIngredientAndStop(event: any): void {
        // Reset form...
        this.resetForm();

        // Hey Dude, did you think at the span of the legend ?
        // Sure not Hobiwan...
        this.form.children('fieldset').children('legend').children('span').html('');


        this.addRow();

        this.form
            .removeClass('fadeInUp')
            .removeClass('animated')
            .addClass('animated')
            .addClass('fadeOutDown');
        setTimeout(() => {
            this.form.removeClass('animated').removeClass('fadeOutDown');
            this.form.addClass('hidden-form');
        }, 1500);

        // Then reset the previous form... 
        // but... don't forget you got a receipe-form-module...
        // So use it
        ReceipeFormModule.resetForm();
    }
    
    private addIngredient(event: any): void {
        // Add a row in the table
        this.addRow();

        // Reset form too...
        this.resetForm();
    }

    private resetForm() {
        for (const field of this.fields) {
            if (field.is('input')) {
                // Hey guy... if unit-quantity, reset to one !!!
                if (field.attr('id') == 'unit-quantity') {
                    field.val('1');
                } else {
                    field.val('');
                }
                
            } else {
                // Hey... how do i move the selected option to the first one ?
                field.children('option').removeAttr('selected');
                field.children('option:first').attr('selected', 'selected');
            }
        }
        // Don't forget to disable buttons... but it's so easy
        $('[addIngredientButton]').attr('disabled', 'disabled');
    }

    private addRow(): void {
        const ingredient: QuantityProduct = this.createObject();

        const tableRow: JQuery = $('<tr>'); // Add an HTML Element in DOM

        const checkboxCell: JQuery = $('<td>');
        // Create a checkbox and add it to the cell
        const checkbox: JQuery = $('<input>');
        checkbox.attr('type', 'checkbox');
        checkbox.addClass('ingredient-selection');
        let tableLength: number = $('aside#receipe-results table tbody tr').length + 1;
        console.log(`Next checkbox id : ${tableLength}`);
        checkbox.attr('id', 'ingredient-' + tableLength);
        checkboxCell.append(checkbox);

        const ingredientTitleCell: JQuery = $('<td>');
        ingredientTitleCell.html(ingredient.getName());

        const ingredientQuantityCell: JQuery = $('<td>');
        ingredientQuantityCell.html(ingredient.getQuantity() + ' ' + ingredient.getUnit());

        const unitPriceCell: JQuery = $('<td>');
        unitPriceCell.html(ingredient.getUnitPrice().toString());

        // Add cells to row
        tableRow
            .append(checkboxCell)
            .append(ingredientTitleCell)
            .append(ingredientQuantityCell)
            .append(unitPriceCell);
        
        // Add row to tbody
        $('aside#receipe-results table tbody').append(tableRow);

        // Update totals...
        $('#receipe-total').html(this.receipe.getRecette().getReceipePrice().toFixed(2));
        $('#one-piece-total').html(this.receipe.getRecette().getUnitPrice().toFixed(2));
    }

    private createObject(): QuantityProduct {
        const ingredient: QuantityProduct = new QuantityProduct();

        ingredient.setName($('#ingredient-title').val().toString());
        ingredient.setBaseUnit($('#base-unit').children('option:selected').val().toString());
        ingredient.setPrice(parseFloat($('#ingredient-price').val().toString()));
        ingredient.setQuantity(parseInt($('#ingredient-quantity').val().toString()));
        ingredient.setUnit($('#target-unit').children('option:selected').val().toString());
        ingredient.setQuantityUnit(parseInt($('#unit-quantity').val().toString()));

        // DI using : from ReceipeFormModule, gets Recette object and push ingredient
        this.receipe.getRecette().addProduct(ingredient);
        
        console.log('Receipe updated : ' + JSON.stringify(this.receipe.getRecette()));

        return ingredient;
    }

    private checkForm(event: any): void {
        if (!super.checkFormFill(event)) {
            // Yeah guys... let's play
            $('[addIngredientButton]').removeAttr('disabled');
        } else {
            $('[addIngredientButton]').attr('disabled', 'disabled');
        }
    }
}