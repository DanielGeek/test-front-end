import { types } from '../../types/types';

describe('Pruebas en Types', () => {

    test('los types deben de ser iguales', () => {
        expect(types).toEqual({
            loadedNotifications: '[NOTIFICATIONS] Loaded notificacions',
            loadingNotifications: '[NOTIFICATIONS] Loading data notifications',

            loadedHotels: '[HOTELS] Loaded hotels',
            loadingHotels: '[HOTELS] Loading data hotels',
            loadedActiveHotel: '[HOTELS] Loaded hotel by id',
            clearActiveHotel: '[HOTELS] Clear active hotel',

            loadedPayments: '[PAYMENTS] Loaded payments',
            loadingPayments: '[PAYMENTS] Loading data payments',

            OpenModal: '[MODAL] Open modal',
            CloseModal: '[MODAL] Close modal',
        });
    })

})
