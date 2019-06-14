export type WorkoutPlanFilterCategoryMatchValues = "any" | "all";

/**
 * The properties that define the filter on a workout plan.
 */
export interface WorkoutPlanFilter {

    flags: {

        /**
         * If 'true', show workout plans that are free.  Otherwise, only show paid plans.
         */
        free?: boolean;

        /**
         * Filter based on the total price to purchase a plan.
         * If true, use properties "totalPriceMin" and "totalPriceMax" to filter plans.
         */
        totalPrice?: boolean;

        pricePerWorkout?: boolean;

        pricePerHour?: boolean;

        settingIndoor?: boolean;

        settingOutdoor?: boolean;

        typeRoad?: boolean;

        typeMTB?: boolean;

        typeCX?: boolean;

        typeTrack?: boolean;

        typeTri?: boolean;

        durationWeeks?: boolean;

        durationWorkoutCount?: boolean;

        durationHoursPerWeek?: boolean;

        durationWorkoutLengthHours?: boolean;

        goalsStrength?: boolean;

        goalsEndurance?: boolean;

        goalsBasePeriod?: boolean;

        workoutTypeBike?: boolean;

        workoutTypeRun?: boolean;

        workoutTypeStrength?: boolean;

        assetFIT?: boolean;

        assetERG?: boolean;

        assetZWO?: boolean;

        assetPowergful?: boolean;

        assetVideo?: boolean;

        assetCoachingSingle?: boolean;

        assetCoachingRepeat?: boolean;

        authorExperienceVerified?: boolean;

        authorExperienceUSACLevel3?: boolean;

        authorExperienceUSACLevel2?: boolean;

        authorExperienceUSACLevel1?: boolean;

        authorExperienceYouth?: boolean;

        authorExperienceCollegiate?: boolean;

        authorExperienceOlympic?: boolean;

    };

    categoryMatch: {

        setting?: WorkoutPlanFilterCategoryMatchValues;

        type?: WorkoutPlanFilterCategoryMatchValues;

        duration?: WorkoutPlanFilterCategoryMatchValues;

        goals?: WorkoutPlanFilterCategoryMatchValues;

        workoutType?: WorkoutPlanFilterCategoryMatchValues;

        asset?: WorkoutPlanFilterCategoryMatchValues;

        authorExperience?: WorkoutPlanFilterCategoryMatchValues;

    };

    numbers: {
        totalPriceMin?: number;
        totalPriceMax?: number;
        pricePerWorkoutMin?: number;
        pricePerWorkoutMax?: number;
        pricePerHourMin?: number;
        pricePerHourMax?: number;
        durationWeeksMin?: number;
        durationWeeksMax?: number;
        durationWorkoutCountMin?: number;
        durationWorkoutCountMax?: number;
        durationHoursPerWeekMin?: number;
        durationHoursPerWeekMax?: number;
        durationWorkoutLengthHoursMin?: number;
        durationWorkoutLengthHoursMax?: number;
    };

}
