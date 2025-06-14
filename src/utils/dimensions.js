import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Valores base (normalmente baseados no design do iPhone X)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Escala horizontal proporcional
 * @param size Tamanho do elemento no design
 */
const horizontalScale = (size) => (width / guidelineBaseWidth) * size;

/**
 * Escala vertical proporcional
 * @param size Tamanho do elemento no design
 */
const verticalScale = (size) => (height / guidelineBaseHeight) * size;

/**
 * Escala moderada com fator (para padding/margin)
 * Combina escala horizontal e vertical de forma suave.
 * @param size Tamanho do elemento no design
 * @param factor Fator de ajuste (0.5 padrão)
 */
const moderateScale = (size, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

export { horizontalScale as hs, verticalScale as vs, moderateScale as ms, width, height };
