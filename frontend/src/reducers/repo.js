// import _ from 'lodash';
// import { districtsIdsArrayToMap, districtIdsArrayToMap } from '../helper/district';
import { GET_REPOS } from '../types';

const defaultState = {
  // plans: [],
  allIds: [],
  byId: {},
  // chosenPlan: null,
  // chosenDistrict: null,
  // loadingPlan: false,
  // accessGeography: null,
};

const RepoReducer = (state = defaultState, action) => {
  console.log('*** REDUCER', action); // eslint-disable-line
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload.data,
        loading: false,
      };

    // case 'BALLISTA_LOGOUT': {
    //   return defaultState;
    // }
    // case 'PLAN_GET_PLANS': {
    //   return { ...state };
    // }
    // case 'PLAN_DELETE_PLAN_SUCCESS': {
    //   const planId = _.get(action, 'meta.previousAction.planId');
    //   const plans = _.get(state, 'plans');
    //   _.remove(plans, { id: planId });
    //
    //   return {
    //     ...state,
    //   };
    // }
    // case 'PLAN_UPDATE_PLAN_SUCCESS':
    // case 'PLAN_UPDATE_PLAN_BASELAYER_SUCCESS':
    // case 'PLAN_UPDATE_FOLDER_PLAN_SUCCESS': {
    //   const plans = [...state.plans];
    //   const newPlan = _.get(action, 'payload.data');
    //   plans.splice(
    //     _.findIndex(plans, { id: _.get(newPlan, 'id') }), 1, newPlan,
    //   );
    //
    //   return {
    //     ...state,
    //     plans,
    //     chosenPlan: newPlan,
    //   };
    // }
    // case 'PLAN_UPDATE_COLUMNS_PLAN_SUCCESS': {
    //   const chosenPlan = { ...state.chosenPlan };
    //   const chosenDistrict = { ...state.chosenDistrict };
    //   const settings = _.get(action, 'payload.data.settings');
    //   const districts = districtsIdsArrayToMap(_.get(action, 'payload.data.districts'));
    //   chosenPlan.settings = settings;
    //
    //   for (let i = 0; i < chosenPlan.districts.length; i++) {
    //     const district = chosenPlan.districts[i];
    //     chosenPlan.districts[i].settings = (_.find(districts, { id: district.id })).settings;
    //   }
    //
    //   const districtIndex = _.findIndex(districts, { id: _.get(chosenDistrict, 'id') });
    //   if (districtIndex !== -1) {
    //     chosenDistrict.settings = districts[districtIndex].settings;
    //   }
    //
    //   return {
    //     ...state,
    //     chosenPlan,
    //     chosenDistrict,
    //   };
    // }
    // case 'PLAN_UPDATE_SETTINGS_PLAN_SUCCESS': {
    //   const plans = [...state.plans];
    //   const newPlan = _.get(action, 'payload.data');
    //   plans.splice(
    //     _.findIndex(plans, { id: _.get(newPlan, 'id') }), 1, newPlan,
    //   );
    //
    //   return {
    //     ...state,
    //     plans,
    //     chosenPlan: newPlan,
    //   };
    // }
    // case 'PLAN_GET_PLANS_SUCCESS': {
    //   const returnVal = { ...state };
    //   const plans = _.get(action, 'payload.data.plans');
    //   const newPlans = [...plans];
    //   returnVal.plans = newPlans;
    //   return returnVal;
    // }
    // case 'PLAN_GET_PLAN_DETAILS': {
    //   return {
    //     ...state,
    //     chosenPlan: action.data.planId,
    //     planDetails: null,
    //     loadingPlan: true,
    //   };
    // }
    // case 'PLAN_GET_PLAN_DETAILS_SUCCESS': {
    //   const population = _.get(action.payload.data, 'total_populations.population');
    //   const districts = districtsIdsArrayToMap(_.get(action.payload.data, 'districts'));
    //   const targetPopulation = population / districts.length;
    //   const accessGeography = districtIdsArrayToMap({
    //     id: -1,
    //     is_locked: true,
    //     settings: _.get(action.payload.data, 'access_geography'),
    //   });
    //   return {
    //     ...state,
    //     loadingPlan: false,
    //     chosenPlan: {
    //       ...action.payload.data,
    //       target_population: targetPopulation,
    //     },
    //     chosenDistrict: districts && districts[0],
    //     accessGeography,
    //   };
    // }
    // case 'PLAN_ADD_DISTRICT': {
    //   return {
    //     ...state,
    //     loadingPlan: true,
    //   };
    // }
    // // case 'EDITOR_SAVE_DISTRICT_SUCCESS': {
    // //   return {
    // //     ...state,
    // //     chosenPlan: {
    // //       ...state.chosenPlan,
    // //       districts: _.get(action, 'payload.data.districts'),
    // //       percentageComplete: _.get(action, 'payload.data.percentage_complete'),
    // //     },
    // //   };
    // // }
    // case 'EDITOR_SAVE_DISTRICT_DETAILS_SUCCESS': {
    //   const chosenPlan = { ...state.chosenPlan };
    //   const chosenDistrict = { ...state.chosenDistrict };
    //   const newDistricts = districtsIdsArrayToMap(_.get(action, 'payload.data.districts', []));
    //   const newChosenDistrictIndex = _.findIndex(
    //        newDistricts, { id: _.get(chosenDistrict, 'id') });
    //   let newChosenDistrict = {};
    //   if (newChosenDistrictIndex !== -1) {
    //     newChosenDistrict = newDistricts[newChosenDistrictIndex];
    //   }
    //
    //   // merge chosenPlan districts with new Districts
    //   chosenPlan.districts = chosenPlan.districts.map((district) => {
    //     const thisDistrictIndex = _.findIndex(newDistricts, { id: district.id });
    //     if (thisDistrictIndex !== -1) {
    //       return {
    //         ...district,
    //         ...newDistricts[thisDistrictIndex],
    //       };
    //     }
    //     return district;
    //   });
    //   const returnVal = {
    //     ...state,
    //     chosenPlan: {
    //       ...chosenPlan,
    //       percentageComplete: _.get(action, 'payload.data.percentage_complete'),
    //     },
    //     chosenDistrict: newChosenDistrict,
    //   };
    //   return returnVal;
    // }
    // case 'EDITOR_DISTRICT_DELETE_SUCCESS': {
    //   const districtId = _.get(action, 'meta.previousAction.districtId');
    //   const districts = [..._.get(state.chosenPlan, 'districts', [])];
    //   _.remove(districts, { id: districtId });
    //
    //   const population = _.get(state.chosenPlan, 'total_populations.population');
    //   const targetPopulation = population / districts.length;
    //
    //   return {
    //     ...state,
    //     chosenPlan: {
    //       ...state.chosenPlan,
    //       districts,
    //       target_population: targetPopulation,
    //     },
    //   };
    // }
    // case 'PLAN_ADD_DISTRICT_SUCCESS': {
    //   const districts = [..._.get(state.chosenPlan, 'districts'), action.payload.data];
    //   const population = _.get(state.chosenPlan, 'total_populations.population');
    //   const targetPopulation = population / districts.length;
    //   return {
    //     ...state,
    //     chosenDistrict: state.chosenDistrict || action.payload.data,
    //     chosenPlan: {
    //       ...state.chosenPlan,
    //       districts,
    //       target_population: targetPopulation,
    //     },
    //     loadingPlan: false,
    //   };
    // }
    // case 'PLAN_CREATE_PLAN_SUCCESS':
    // case 'PLAN_COPY_PLAN_SUCCESS': {
    //   const createdPlan = _.get(action, 'payload.data');
    //   const existingPlans = [...state.plans];
    //   const newAllIds = [...state.allIds];
    //   const newById = { ...state.byId };
    //   newAllIds.push(createdPlan);
    //   newById[createdPlan.id] = createdPlan;
    //   existingPlans.push(createdPlan);
    //
    //   return {
    //     ...state,
    //     allIds: newAllIds,
    //     byId: newById,
    //     plans: existingPlans,
    //     chosenPlan: createdPlan,
    //   };
    // }
    // case 'PLAN_SET_CHOSEN_DISTRICT': {
    //   return {
    //     ...state,
    //     chosenDistrict: action.data.chosenDistrict,
    //   };
    // }
    // // case 'PLAN_SELECT_UNASSIGNED':
    // //   return {
    // //     ...state,
    // //     districtDetails: null,
    // //     chosenDistrict: { id: -1, alias: 'Unassigned' },
    // //   };
    default: {
      return state;
    }
  }
};

export default RepoReducer;
