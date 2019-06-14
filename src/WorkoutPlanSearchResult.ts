export type WorkoutPlanType = "road" | "mtb" | "cx" | "track" | "tri";

export type WorkoutPlanGoal = "strength" | "endurance" | "basePeriod";

export type WorkoutPlanAsset = "fit" | "erg" | "zwo" | "powergful" | "video" | "coachingSingle" | "coachingRepeat";

/**
 * The items sent when querying workout plans.
 *
 * Not all columns are sent by default: the columns sent are determined by the request.
 * Therefore, most fields are marked as optional.
 */
export interface WorkoutPlanSearchResult {

    /**
     * The unique ID of the workout plan.
     */
    id: string;

    /**
     * The name of the workout plan.
     */
    name: string;

    /**
     * The name of the plan author.
     */
    author: string;

    /**
     * The unique ID of the author.
     */
    author_id: string;

    /**
     * The number of weeks that the plan will take.
     */
    weeks?: number;

    /**
     * The average number of training hours per week.
     */
    hoursPerWeek?: number;

    /**
     * The list of targeted activities by the plan.
     */
    types?: WorkoutPlanType[];

    /**
     * The list of goals for plans.
     */
    goals?: WorkoutPlanGoal[];

    /**
     * The total cost of the plan.  `0` if the plan is free.
     */
    price: number;

    /**
     * The price per workout in the plan.
     */
    pricePerWorkout?: number;

    /**
     * The price per hour of training in the plan.
     */
    pricePerHour?: number;

    /**
     * The number of workouts in the plan.
     */
    workoutCount?: number;

    /**
     * The number of training hours.
     */
    hours?: number;

    assets?: WorkoutPlanAsset[];

}
