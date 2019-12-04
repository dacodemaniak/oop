export abstract class ConvertHelper {
    public static convert(baseUnit: string, quantityUnit: string, quantity: number): number {
        const myBaseUnit: string = baseUnit.toLowerCase();
        const myQuantityUnit: string = quantityUnit.toLowerCase();

        if (myBaseUnit != myQuantityUnit) {
            switch (myQuantityUnit) {
                case 'kg':
                    switch (baseUnit) {
                
                        case 'g':
                            return quantity * 1000;
                        break;
                
                        case 'mg':
                                return quantity * (1000 * 1000);
                        break;
    
                    }
                break;

                case 'g':
                        switch (baseUnit) {
                
                            case 'kg':
                                return quantity / 1000;
                            break;
                    
                            case 'mg':
                                    return quantity * 1000;
                            break;
        
                        }
                break;

                case 'mg':
                        switch (baseUnit) {
                
                            case 'g':
                                return quantity / 1000;
                            break;
                    
                            case 'kg':
                                    return quantity / (1000 * 1000);
                            break;
        
                        }
                break;

                case 'l':
                        switch (baseUnit) {
                
                            case 'cl':
                                return quantity * 100;
                            break;
                    
                            case 'ml':
                                    return quantity * 1000;
                            break;
        
                        }                    
                break;

                case 'cl':
                        switch (baseUnit) {
                
                            case 'l':
                                return quantity / 100;
                            break;
                    
                            case 'ml':
                                    return quantity / 1000;
                            break;
        
                        }  
                break;

                case 'ml':
                        switch (baseUnit) {
                
                            case 'l':
                                return quantity / 1000;
                            break;
                    
                            case 'cl':
                                    return quantity / 100;
                            break;
        
                        }  
                break;
            }
        }
        return quantity;
    }
}