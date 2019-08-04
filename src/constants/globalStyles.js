import colors from './colors';
import fonts from './fonts';

export default {
  activeOpacity: 0.7,
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowCenterAlign: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navHeaderStyle: {
    backgroundColor: colors.black,
    borderBottomWidth: 0,
    elevation: 0
  },

  containerNavBlocks: {
    height: 44,
    justifyContent: 'center',
    overflow: 'hidden'
  },

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },

  textCiruBold14: { fontFamily: fonts.circularProBold, fontSize: 14 },
  textCiruBold16: { fontFamily: fonts.circularProBold, fontSize: 16 },
  textCiruBold18: { fontFamily: fonts.circularProBold, fontSize: 18 },
  textCiruBook12: { fontFamily: fonts.circularProBook, fontSize: 12 },
  textCiruBook14: { fontFamily: fonts.circularProBook, fontSize: 14 },
  textCiruBook16: { fontFamily: fonts.circularProBook, fontSize: 16 },
  textCiruBook18: { fontFamily: fonts.circularProBook, fontSize: 18 },
  textLarsBold14: { fontFamily: fonts.larsseitBold, fontSize: 14 },
  textLarsBold16: { fontFamily: fonts.larsseitBold, fontSize: 16 },
  textLarsBold18: { fontFamily: fonts.larsseitBold, fontSize: 18 },
  textLarsItalic14: { fontFamily: fonts.larsseitItalic, fontSize: 14 },
  textLarsItalic16: { fontFamily: fonts.larsseitItalic, fontSize: 16 },
  textLarsItalic18: { fontFamily: fonts.larsseitItalic, fontSize: 18 },
  textLarsThin14: { fontFamily: fonts.larsseitThin, fontSize: 14 },
  textLarsThin16: { fontFamily: fonts.larsseitThin, fontSize: 16 },
  textLarsThin18: { fontFamily: fonts.larsseitThin, fontSize: 18 },

  spacer24: { height: 24 },
  spacer48: { height: 48 },
  spacer64: { height: 64 },
  spacer88: { height: 88 },
  spacer128: { height: 128 },

  mB8: { marginBottom: 8 },
  mL8: { marginLeft: 8 },
  mL16: { marginLeft: 16 },
  mR8: { marginRight: 8 },
  mR16: { marginRight: 16 },
  mR24: { marginRight: 24 },
  mR48: { marginRight: 48 },
  mR64: { marginRight: 64 },
  mT4: { marginTop: 4 },
  mT8: { marginTop: 8 },
  mT16: { marginTop: 16 },

  mH24: { marginHorizontal: 24 },

  mV16: { marginVertical: 16 },
  mV24: { marginVertical: 24 },
  mV32: { marginVertical: 32 },

  p4: { padding: 4 },
  p8: { padding: 8 },
  p16: { padding: 16 },
  p24: { padding: 24 },

  pH4: { paddingHorizontal: 4 },
  pH8: { paddingHorizontal: 8 },
  pH16: { paddingHorizontal: 16 },
  pH24: { paddingHorizontal: 24 }
};
