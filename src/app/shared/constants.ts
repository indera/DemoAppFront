export const constants = {
  // Guided mode stages and ordering
  STAGES: {1: 'MODE', 2: 'TARGET_EVENT', 3: 'SOLVE_FOR', 4: 'STATISTICAL_TESTS', 5: 'TYPE_ONE_ERROR'},
  // Target event constants
  TARGET_EVENT_FORM_ERRORS: {
    'power': '',
    'samplesize': '',
    'ciwidth': ''
  },
  TYPE_ONE_ERROR_ERRORS: {
    'typeoneerror': ''
  },
  TARGET_EVENT_VALIDATION_MESSAGES: {
    'power': {
      'minval': 'Value too low.',
      'maxval': 'Value too high'
    },
    'samplesize': {
      'minval': 'Value too low.',
      'maxval': 'Value too high'
    },
    'ciwidth': {
      'minval': 'Value too low.',
      'maxval': 'Value too high'
    }
  },
  TYPE_ONE_ERROR_VALIDATION_MESSAGES: {
    'typeoneerror': {
      'minval': 'Value too low.',
      'maxval': 'Value too high'
    }
  },
  REJECTION_EVENT: 'REJECTION',
  CIWIDTH_EVENT: 'CIWIDTH',
  WAVR_EVENT: 'WAVR',
  // Solve for constants
  SOLVE_FOR_POWER: 'POWER',
  SOLVE_FOR_SAMPLESIZE: 'SAMPLESIZE',
  // Statistical Tests Constants
  STATISTICAL_TESTS: {HOTELLING_LAWLEY: 'Hotelling Lawley Trace',
    PILLAI_BARTLET: 'Pillai-Bartlett Trace',
  WILKS_LIKLIEHOOD: 'Wilks Likelihood Ratio',
  BOX_CORRECTION: 'Repeated Measures: Box Correction',
  GEISSER_GREENHOUSE: 'Repeated Measures: Geisser-Greenhouse Correction',
  HUYNH_FELDT: 'Repeated Measures: Huynh-Feldt Correction',
  UNCORRECTED: 'Repeated Measure: uncorrected',
  UNIREP: 'High Dimension, low sample size- UNIREP',
  MULTIREP: 'High Dimension, low sample size - MULTIREP'}
};