import { WattAppState } from '@stores/index';

export const selectLoading = (state: WattAppState) => state.common.loading;
export const selectIsMenuOpen = (state: WattAppState) => state.common.isMenuOpen;
export const selectIsMobile = (state: WattAppState) => state.common.isMobile;
export const selectIsIpad = (state: WattAppState) => state.common.isIpad;
