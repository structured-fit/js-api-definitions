import { WorkoutPlanSearchResult } from "./WorkoutPlanSearchResult";

export interface PlanField {

    id: keyof WorkoutPlanSearchResult;

    label: string;

    visible: boolean;

    sortable: boolean;

    shortDesc: string;

    /**
     * The IDs of other fields that should be included
     * if this field is selected.
     */
    linkedFields?: string[];
}

export const PlanFields: PlanField[] = [

    {
        id: "id",
        label: "ID",
        visible: false,
        sortable: false,
        shortDesc: "The internal ID for this fitness plan.",
    },

    {
        id: "name",
        label: "Name",
        visible: true,
        sortable: true,
        shortDesc: "A short name for the fitness plan.",
    },

    {
        id: "author",
        label: "Author",
        visible: true,
        sortable: false,
        shortDesc: "The name of the plan's author.",
        linkedFields: [ "author_id" ],
    },

    {
        id: "author_id",
        label: "Author ID",
        visible: false,
        sortable: false,
        shortDesc: "The internal ID of the author.",
    },

    {
        id: "types",
        label: "Types",
        visible: true,
        sortable: false,
        shortDesc: "The types of activities targeted by this plan",
    },

    {
        id: "goals",
        label: "Goals",
        visible: true,
        sortable: false,
        shortDesc: "The goals of the plan",
    },

    {
        id: "price",
        label: "Price",
        visible: true,
        sortable: true,
        shortDesc: "The total price for this fitness plan, in USD.",
    },

    {
        id: "pricePerWorkout",
        label: "Price/Workout",
        visible: true,
        sortable: true,
        shortDesc: "The price of the plan, divided by the number of workouts.",
    },

    {
        id: "pricePerHour",
        label: "Price/Hour",
        visible: true,
        sortable: true,
        shortDesc: "The price of the plan, divided by the number of hours in the workout.",
    },

    {
        id: "weeks",
        label: "Weeks",
        visible: true,
        sortable: true,
        shortDesc: "The number of weeks in the plan.",
    },

    {
        id: "workoutCount",
        label: "# of Workouts",
        visible: true,
        sortable: true,
        shortDesc: "The total number of workouts in the plan.",
    },

    {
        id: "hours",
        label: "Hours",
        visible: true,
        sortable: true,
        shortDesc: "The total number of training hours to complete the plan.",
    },

    {
        id: "hoursPerWeek",
        label: "Hours/Week",
        visible: true,
        sortable: true,
        shortDesc: "The average number of training hours per week",
    },

    {
        id: "assets",
        label: "Assets",
        visible: true,
        sortable: false,
        shortDesc: "Which assets are included in the workout",
    },

];

export const PlanFieldsMap: { [key: string]: PlanField } = {};
for (const field of PlanFields) {
    PlanFieldsMap[field.id] = field;
}
