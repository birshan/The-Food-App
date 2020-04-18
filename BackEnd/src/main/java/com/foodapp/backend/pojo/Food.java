package com.foodapp.backend.pojo;

import javax.persistence.Entity;

@Entity
public class Food {

    private Integer Id;
    private String name;
    private String foodGroup;
    private double calories;
    private double fat_g;
    private double protein_g;
    private double carbohydrate_g;
    private double sugars_g;
    private double fiber_g;
    private double cholestorol_mg;
    private double saturatedFats_g;
    private double calcium_mg;
    private double iron_mg;
    private double potassium_mg;
    private double magnesium_mg;
    private double vitaminA_IU;
    private double vitaminA_RAE_mcg;
    private double vitaminC_mg;
    private double vitaminB12_mcg;
    private double vitaminD_mcg;
    private double vitaminE_AlphaTocopherol_mg;
    private double addedSugar_g;
    private double netCarbs_g;
    private double water_g;
    private double omega3s_mg;
    private double omega6s_mg;
    private double PRAL_score;
    private double transFattyAcids_g;
    private double solubleFiber_g;
    private double insolubleFiber_g;
    private double sucrose_g;
    private double glucose_dextrose_g;
    private double fructose_g;
    private double lactose_g;
    private double maltose_g;
    private double galactose_g;
    private double starch_g;
    private double totalSugarAlcohols_g;
    private double phosphorus_mg;
    private double sodium_mg;
    private double zinc_mg;
    private double copper_mg;
    private double manganese_mg;
    private double selenium_mcg;
    private double fluoride_mcg;
    private double molybdenum_mcg;
    private double chlorine_mg;
    private double thiaminB1_mg;
    private double riboflavinB2_mg;
    private double niancinB2_mg;
    private double acidB5_mg;
    private double vitaminB6_mg;
    private double biotinB7_mcg;
    private double folateB9_mcg;
    private double folicAcid_mcg;
    private double foodFolate_mcg;
    private double folateDFE_mcg;
    private double choline_mg;
    private double betaine_mg;
    private double retinol_mcg;
    private double caroteneBeta_mcg;
    private double caroteneAlpha_mcg;
    private double lycopene_mcg;
    private double lutueinPlusZeaxanthin_mcg;
    private double vitaminD2_ergocalciferol_mcg;
    private double vitaminD3_cholecalciferol_mcg;
    private double vitaminD_IU;
    private double vitaminK_mcg;
    private double dihydrophylloquinone_mcg;
    private double menaquinone4_mcg;
    private double fattyAcids_totalMonounsaturated_mg;
    private double fattyAcids_totalPolyunsaturated_mg;
    //didnt add some in between here
    private double tryptophan_mg;
    private double threonine_mg;
    private double isoleucine_mg;
    private double leucine_mg;
    private double lysine_mg;
    private double methionine_mg;
    private double cystine_mg;
    private double phenylalanine_mg;
    private double tyrosine_mg;
    private double valine_mg;
    private double arginine_mg;
    private double histidine_mg;
    private double alanine_mg;
    private double asparticAcid_mg;
    private double glutamicAcid_mg;
    private double glycin_mg;
    private double proline_mg;
    private double serine_mg;
    private double hydroxyproline_mg;
    private double alcohol_g;
    private double caffeine_mg;
    private double theobromine_mg;
    private double servingWeight1_g;
    private String servingDescription1;
    private double servingWeight2_g;
    private String servingDescription2;
    private double servingWeight3_g;
    private String servingDescription3;
    private double servingWeight4_g;
    private String servingDescription4;
    private double servingWeight5_g;
    private String servingDescription5;
    private double servingWeight6_g;
    private String servingDescription6;
    private double servingWeight7_g;
    private String servingDescription7;
    private double servingWeight8_g;
    private String servingDescription8;
    private double servingWeight9_g;
    private String servingDescription9;
    private double calorieWeight_g;


    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFoodGroup() {
        return foodGroup;
    }

    public void setFoodGroup(String foodGroup) {
        this.foodGroup = foodGroup;
    }

    public double getCalories() {
        return calories;
    }

    public void setCalories(double calories) {
        this.calories = calories;
    }

    public double getFat_g() {
        return fat_g;
    }

    public void setFat_g(double fat_g) {
        this.fat_g = fat_g;
    }

    public double getProtein_g() {
        return protein_g;
    }

    public void setProtein_g(double protein_g) {
        this.protein_g = protein_g;
    }

    public double getCarbohydrate_g() {
        return carbohydrate_g;
    }

    public void setCarbohydrate_g(double carbohydrate_g) {
        this.carbohydrate_g = carbohydrate_g;
    }

    public double getSugars_g() {
        return sugars_g;
    }

    public void setSugars_g(double sugars_g) {
        this.sugars_g = sugars_g;
    }

    public double getFiber_g() {
        return fiber_g;
    }

    public void setFiber_g(double fiber_g) {
        this.fiber_g = fiber_g;
    }

    public double getCholestorol_mg() {
        return cholestorol_mg;
    }

    public void setCholestorol_mg(double cholestorol_mg) {
        this.cholestorol_mg = cholestorol_mg;
    }

    public double getSaturatedFats_g() {
        return saturatedFats_g;
    }

    public void setSaturatedFats_g(double saturatedFats_g) {
        this.saturatedFats_g = saturatedFats_g;
    }

    public double getCalcium_mg() {
        return calcium_mg;
    }

    public void setCalcium_mg(double calcium_mg) {
        this.calcium_mg = calcium_mg;
    }

    public double getIron_mg() {
        return iron_mg;
    }

    public void setIron_mg(double iron_mg) {
        this.iron_mg = iron_mg;
    }

    public double getPotassium_mg() {
        return potassium_mg;
    }

    public void setPotassium_mg(double potassium_mg) {
        this.potassium_mg = potassium_mg;
    }

    public double getMagnesium_mg() {
        return magnesium_mg;
    }

    public void setMagnesium_mg(double magnesium_mg) {
        this.magnesium_mg = magnesium_mg;
    }

    public double getVitaminA_IU() {
        return vitaminA_IU;
    }

    public void setVitaminA_IU(double vitaminA_IU) {
        this.vitaminA_IU = vitaminA_IU;
    }

    public double getVitaminA_RAE_mcg() {
        return vitaminA_RAE_mcg;
    }

    public void setVitaminA_RAE_mcg(double vitaminA_RAE_mcg) {
        this.vitaminA_RAE_mcg = vitaminA_RAE_mcg;
    }

    public double getVitaminC_mg() {
        return vitaminC_mg;
    }

    public void setVitaminC_mg(double vitaminC_mg) {
        this.vitaminC_mg = vitaminC_mg;
    }

    public double getVitaminB12_mcg() {
        return vitaminB12_mcg;
    }

    public void setVitaminB12_mcg(double vitaminB12_mcg) {
        this.vitaminB12_mcg = vitaminB12_mcg;
    }

    public double getVitaminD_mcg() {
        return vitaminD_mcg;
    }

    public void setVitaminD_mcg(double vitaminD_mcg) {
        this.vitaminD_mcg = vitaminD_mcg;
    }

    public double getVitaminE_AlphaTocopherol_mg() {
        return vitaminE_AlphaTocopherol_mg;
    }

    public void setVitaminE_AlphaTocopherol_mg(double vitaminE_AlphaTocopherol_mg) {
        this.vitaminE_AlphaTocopherol_mg = vitaminE_AlphaTocopherol_mg;
    }

    public double getAddedSugar_g() {
        return addedSugar_g;
    }

    public void setAddedSugar_g(double addedSugar_g) {
        this.addedSugar_g = addedSugar_g;
    }

    public double getNetCarbs_g() {
        return netCarbs_g;
    }

    public void setNetCarbs_g(double netCarbs_g) {
        this.netCarbs_g = netCarbs_g;
    }

    public double getWater_g() {
        return water_g;
    }

    public void setWater_g(double water_g) {
        this.water_g = water_g;
    }

    public double getOmega3s_mg() {
        return omega3s_mg;
    }

    public void setOmega3s_mg(double omega3s_mg) {
        this.omega3s_mg = omega3s_mg;
    }

    public double getOmega6s_mg() {
        return omega6s_mg;
    }

    public void setOmega6s_mg(double omega6s_mg) {
        this.omega6s_mg = omega6s_mg;
    }

    public double getPRAL_score() {
        return PRAL_score;
    }

    public void setPRAL_score(double PRAL_score) {
        this.PRAL_score = PRAL_score;
    }

    public double getTransFattyAcids_g() {
        return transFattyAcids_g;
    }

    public void setTransFattyAcids_g(double transFattyAcids_g) {
        this.transFattyAcids_g = transFattyAcids_g;
    }

    public double getSolubleFiber_g() {
        return solubleFiber_g;
    }

    public void setSolubleFiber_g(double solubleFiber_g) {
        this.solubleFiber_g = solubleFiber_g;
    }

    public double getInsolubleFiber_g() {
        return insolubleFiber_g;
    }

    public void setInsolubleFiber_g(double insolubleFiber_g) {
        this.insolubleFiber_g = insolubleFiber_g;
    }

    public double getSucrose_g() {
        return sucrose_g;
    }

    public void setSucrose_g(double sucrose_g) {
        this.sucrose_g = sucrose_g;
    }

    public double getGlucose_dextrose_g() {
        return glucose_dextrose_g;
    }

    public void setGlucose_dextrose_g(double glucose_dextrose_g) {
        this.glucose_dextrose_g = glucose_dextrose_g;
    }

    public double getFructose_g() {
        return fructose_g;
    }

    public void setFructose_g(double fructose_g) {
        this.fructose_g = fructose_g;
    }

    public double getLactose_g() {
        return lactose_g;
    }

    public void setLactose_g(double lactose_g) {
        this.lactose_g = lactose_g;
    }

    public double getMaltose_g() {
        return maltose_g;
    }

    public void setMaltose_g(double maltose_g) {
        this.maltose_g = maltose_g;
    }

    public double getGalactose_g() {
        return galactose_g;
    }

    public void setGalactose_g(double galactose_g) {
        this.galactose_g = galactose_g;
    }

    public double getStarch_g() {
        return starch_g;
    }

    public void setStarch_g(double starch_g) {
        this.starch_g = starch_g;
    }

    public double getTotalSugarAlcohols_g() {
        return totalSugarAlcohols_g;
    }

    public void setTotalSugarAlcohols_g(double totalSugarAlcohols_g) {
        this.totalSugarAlcohols_g = totalSugarAlcohols_g;
    }

    public double getPhosphorus_mg() {
        return phosphorus_mg;
    }

    public void setPhosphorus_mg(double phosphorus_mg) {
        this.phosphorus_mg = phosphorus_mg;
    }

    public double getSodium_mg() {
        return sodium_mg;
    }

    public void setSodium_mg(double sodium_mg) {
        this.sodium_mg = sodium_mg;
    }

    public double getZinc_mg() {
        return zinc_mg;
    }

    public void setZinc_mg(double zinc_mg) {
        this.zinc_mg = zinc_mg;
    }

    public double getCopper_mg() {
        return copper_mg;
    }

    public void setCopper_mg(double copper_mg) {
        this.copper_mg = copper_mg;
    }

    public double getManganese_mg() {
        return manganese_mg;
    }

    public void setManganese_mg(double manganese_mg) {
        this.manganese_mg = manganese_mg;
    }

    public double getSelenium_mcg() {
        return selenium_mcg;
    }

    public void setSelenium_mcg(double selenium_mcg) {
        this.selenium_mcg = selenium_mcg;
    }

    public double getFluoride_mcg() {
        return fluoride_mcg;
    }

    public void setFluoride_mcg(double fluoride_mcg) {
        this.fluoride_mcg = fluoride_mcg;
    }

    public double getMolybdenum_mcg() {
        return molybdenum_mcg;
    }

    public void setMolybdenum_mcg(double molybdenum_mcg) {
        this.molybdenum_mcg = molybdenum_mcg;
    }

    public double getChlorine_mg() {
        return chlorine_mg;
    }

    public void setChlorine_mg(double chlorine_mg) {
        this.chlorine_mg = chlorine_mg;
    }

    public double getThiaminB1_mg() {
        return thiaminB1_mg;
    }

    public void setThiaminB1_mg(double thiaminB1_mg) {
        this.thiaminB1_mg = thiaminB1_mg;
    }

    public double getRiboflavinB2_mg() {
        return riboflavinB2_mg;
    }

    public void setRiboflavinB2_mg(double riboflavinB2_mg) {
        this.riboflavinB2_mg = riboflavinB2_mg;
    }

    public double getNiancinB2_mg() {
        return niancinB2_mg;
    }

    public void setNiancinB2_mg(double niancinB2_mg) {
        this.niancinB2_mg = niancinB2_mg;
    }

    public double getAcidB5_mg() {
        return acidB5_mg;
    }

    public void setAcidB5_mg(double acidB5_mg) {
        this.acidB5_mg = acidB5_mg;
    }

    public double getVitaminB6_mg() {
        return vitaminB6_mg;
    }

    public void setVitaminB6_mg(double vitaminB6_mg) {
        this.vitaminB6_mg = vitaminB6_mg;
    }

    public double getBiotinB7_mcg() {
        return biotinB7_mcg;
    }

    public void setBiotinB7_mcg(double biotinB7_mcg) {
        this.biotinB7_mcg = biotinB7_mcg;
    }

    public double getFolateB9_mcg() {
        return folateB9_mcg;
    }

    public void setFolateB9_mcg(double folateB9_mcg) {
        this.folateB9_mcg = folateB9_mcg;
    }

    public double getFolicAcid_mcg() {
        return folicAcid_mcg;
    }

    public void setFolicAcid_mcg(double folicAcid_mcg) {
        this.folicAcid_mcg = folicAcid_mcg;
    }

    public double getFoodFolate_mcg() {
        return foodFolate_mcg;
    }

    public void setFoodFolate_mcg(double foodFolate_mcg) {
        this.foodFolate_mcg = foodFolate_mcg;
    }

    public double getFolateDFE_mcg() {
        return folateDFE_mcg;
    }

    public void setFolateDFE_mcg(double folateDFE_mcg) {
        this.folateDFE_mcg = folateDFE_mcg;
    }

    public double getCholine_mg() {
        return choline_mg;
    }

    public void setCholine_mg(double choline_mg) {
        this.choline_mg = choline_mg;
    }

    public double getBetaine_mg() {
        return betaine_mg;
    }

    public void setBetaine_mg(double betaine_mg) {
        this.betaine_mg = betaine_mg;
    }

    public double getRetinol_mcg() {
        return retinol_mcg;
    }

    public void setRetinol_mcg(double retinol_mcg) {
        this.retinol_mcg = retinol_mcg;
    }

    public double getCaroteneBeta_mcg() {
        return caroteneBeta_mcg;
    }

    public void setCaroteneBeta_mcg(double caroteneBeta_mcg) {
        this.caroteneBeta_mcg = caroteneBeta_mcg;
    }

    public double getCaroteneAlpha_mcg() {
        return caroteneAlpha_mcg;
    }

    public void setCaroteneAlpha_mcg(double caroteneAlpha_mcg) {
        this.caroteneAlpha_mcg = caroteneAlpha_mcg;
    }

    public double getLycopene_mcg() {
        return lycopene_mcg;
    }

    public void setLycopene_mcg(double lycopene_mcg) {
        this.lycopene_mcg = lycopene_mcg;
    }

    public double getLutueinPlusZeaxanthin_mcg() {
        return lutueinPlusZeaxanthin_mcg;
    }

    public void setLutueinPlusZeaxanthin_mcg(double lutueinPlusZeaxanthin_mcg) {
        this.lutueinPlusZeaxanthin_mcg = lutueinPlusZeaxanthin_mcg;
    }

    public double getVitaminD2_ergocalciferol_mcg() {
        return vitaminD2_ergocalciferol_mcg;
    }

    public void setVitaminD2_ergocalciferol_mcg(double vitaminD2_ergocalciferol_mcg) {
        this.vitaminD2_ergocalciferol_mcg = vitaminD2_ergocalciferol_mcg;
    }

    public double getVitaminD3_cholecalciferol_mcg() {
        return vitaminD3_cholecalciferol_mcg;
    }

    public void setVitaminD3_cholecalciferol_mcg(double vitaminD3_cholecalciferol_mcg) {
        this.vitaminD3_cholecalciferol_mcg = vitaminD3_cholecalciferol_mcg;
    }

    public double getVitaminD_IU() {
        return vitaminD_IU;
    }

    public void setVitaminD_IU(double vitaminD_IU) {
        this.vitaminD_IU = vitaminD_IU;
    }

    public double getVitaminK_mcg() {
        return vitaminK_mcg;
    }

    public void setVitaminK_mcg(double vitaminK_mcg) {
        this.vitaminK_mcg = vitaminK_mcg;
    }

    public double getDihydrophylloquinone_mcg() {
        return dihydrophylloquinone_mcg;
    }

    public void setDihydrophylloquinone_mcg(double dihydrophylloquinone_mcg) {
        this.dihydrophylloquinone_mcg = dihydrophylloquinone_mcg;
    }

    public double getMenaquinone4_mcg() {
        return menaquinone4_mcg;
    }

    public void setMenaquinone4_mcg(double menaquinone4_mcg) {
        this.menaquinone4_mcg = menaquinone4_mcg;
    }

    public double getFattyAcids_totalMonounsaturated_mg() {
        return fattyAcids_totalMonounsaturated_mg;
    }

    public void setFattyAcids_totalMonounsaturated_mg(double fattyAcids_totalMonounsaturated_mg) {
        this.fattyAcids_totalMonounsaturated_mg = fattyAcids_totalMonounsaturated_mg;
    }

    public double getFattyAcids_totalPolyunsaturated_mg() {
        return fattyAcids_totalPolyunsaturated_mg;
    }

    public void setFattyAcids_totalPolyunsaturated_mg(double fattyAcids_totalPolyunsaturated_mg) {
        this.fattyAcids_totalPolyunsaturated_mg = fattyAcids_totalPolyunsaturated_mg;
    }

    public double getTryptophan_mg() {
        return tryptophan_mg;
    }

    public void setTryptophan_mg(double tryptophan_mg) {
        this.tryptophan_mg = tryptophan_mg;
    }

    public double getThreonine_mg() {
        return threonine_mg;
    }

    public void setThreonine_mg(double threonine_mg) {
        this.threonine_mg = threonine_mg;
    }

    public double getIsoleucine_mg() {
        return isoleucine_mg;
    }

    public void setIsoleucine_mg(double isoleucine_mg) {
        this.isoleucine_mg = isoleucine_mg;
    }

    public double getLeucine_mg() {
        return leucine_mg;
    }

    public void setLeucine_mg(double leucine_mg) {
        this.leucine_mg = leucine_mg;
    }

    public double getLysine_mg() {
        return lysine_mg;
    }

    public void setLysine_mg(double lysine_mg) {
        this.lysine_mg = lysine_mg;
    }

    public double getMethionine_mg() {
        return methionine_mg;
    }

    public void setMethionine_mg(double methionine_mg) {
        this.methionine_mg = methionine_mg;
    }

    public double getCystine_mg() {
        return cystine_mg;
    }

    public void setCystine_mg(double cystine_mg) {
        this.cystine_mg = cystine_mg;
    }

    public double getPhenylalanine_mg() {
        return phenylalanine_mg;
    }

    public void setPhenylalanine_mg(double phenylalanine_mg) {
        this.phenylalanine_mg = phenylalanine_mg;
    }

    public double getTyrosine_mg() {
        return tyrosine_mg;
    }

    public void setTyrosine_mg(double tyrosine_mg) {
        this.tyrosine_mg = tyrosine_mg;
    }

    public double getValine_mg() {
        return valine_mg;
    }

    public void setValine_mg(double valine_mg) {
        this.valine_mg = valine_mg;
    }

    public double getArginine_mg() {
        return arginine_mg;
    }

    public void setArginine_mg(double arginine_mg) {
        this.arginine_mg = arginine_mg;
    }

    public double getHistidine_mg() {
        return histidine_mg;
    }

    public void setHistidine_mg(double histidine_mg) {
        this.histidine_mg = histidine_mg;
    }

    public double getAlanine_mg() {
        return alanine_mg;
    }

    public void setAlanine_mg(double alanine_mg) {
        this.alanine_mg = alanine_mg;
    }

    public double getAsparticAcid_mg() {
        return asparticAcid_mg;
    }

    public void setAsparticAcid_mg(double asparticAcid_mg) {
        this.asparticAcid_mg = asparticAcid_mg;
    }

    public double getGlutamicAcid_mg() {
        return glutamicAcid_mg;
    }

    public void setGlutamicAcid_mg(double glutamicAcid_mg) {
        this.glutamicAcid_mg = glutamicAcid_mg;
    }

    public double getGlycin_mg() {
        return glycin_mg;
    }

    public void setGlycin_mg(double glycin_mg) {
        this.glycin_mg = glycin_mg;
    }

    public double getProline_mg() {
        return proline_mg;
    }

    public void setProline_mg(double proline_mg) {
        this.proline_mg = proline_mg;
    }

    public double getSerine_mg() {
        return serine_mg;
    }

    public void setSerine_mg(double serine_mg) {
        this.serine_mg = serine_mg;
    }

    public double getHydroxyproline_mg() {
        return hydroxyproline_mg;
    }

    public void setHydroxyproline_mg(double hydroxyproline_mg) {
        this.hydroxyproline_mg = hydroxyproline_mg;
    }

    public double getAlcohol_g() {
        return alcohol_g;
    }

    public void setAlcohol_g(double alcohol_g) {
        this.alcohol_g = alcohol_g;
    }

    public double getCaffeine_mg() {
        return caffeine_mg;
    }

    public void setCaffeine_mg(double caffeine_mg) {
        this.caffeine_mg = caffeine_mg;
    }

    public double getTheobromine_mg() {
        return theobromine_mg;
    }

    public void setTheobromine_mg(double theobromine_mg) {
        this.theobromine_mg = theobromine_mg;
    }

    public double getServingWeight1_g() {
        return servingWeight1_g;
    }

    public void setServingWeight1_g(double servingWeight1_g) {
        this.servingWeight1_g = servingWeight1_g;
    }

    public String getServingDescription1() {
        return servingDescription1;
    }

    public void setServingDescription1(String servingDescription1) {
        this.servingDescription1 = servingDescription1;
    }

    public double getServingWeight2_g() {
        return servingWeight2_g;
    }

    public void setServingWeight2_g(double servingWeight2_g) {
        this.servingWeight2_g = servingWeight2_g;
    }

    public String getServingDescription2() {
        return servingDescription2;
    }

    public void setServingDescription2(String servingDescription2) {
        this.servingDescription2 = servingDescription2;
    }

    public double getServingWeight3_g() {
        return servingWeight3_g;
    }

    public void setServingWeight3_g(double servingWeight3_g) {
        this.servingWeight3_g = servingWeight3_g;
    }

    public String getServingDescription3() {
        return servingDescription3;
    }

    public void setServingDescription3(String servingDescription3) {
        this.servingDescription3 = servingDescription3;
    }

    public double getServingWeight4_g() {
        return servingWeight4_g;
    }

    public void setServingWeight4_g(double servingWeight4_g) {
        this.servingWeight4_g = servingWeight4_g;
    }

    public String getServingDescription4() {
        return servingDescription4;
    }

    public void setServingDescription4(String servingDescription4) {
        this.servingDescription4 = servingDescription4;
    }

    public double getServingWeight5_g() {
        return servingWeight5_g;
    }

    public void setServingWeight5_g(double servingWeight5_g) {
        this.servingWeight5_g = servingWeight5_g;
    }

    public String getServingDescription5() {
        return servingDescription5;
    }

    public void setServingDescription5(String servingDescription5) {
        this.servingDescription5 = servingDescription5;
    }

    public double getServingWeight6_g() {
        return servingWeight6_g;
    }

    public void setServingWeight6_g(double servingWeight6_g) {
        this.servingWeight6_g = servingWeight6_g;
    }

    public String getServingDescription6() {
        return servingDescription6;
    }

    public void setServingDescription6(String servingDescription6) {
        this.servingDescription6 = servingDescription6;
    }

    public double getServingWeight7_g() {
        return servingWeight7_g;
    }

    public void setServingWeight7_g(double servingWeight7_g) {
        this.servingWeight7_g = servingWeight7_g;
    }

    public String getServingDescription7() {
        return servingDescription7;
    }

    public void setServingDescription7(String servingDescription7) {
        this.servingDescription7 = servingDescription7;
    }

    public double getServingWeight8_g() {
        return servingWeight8_g;
    }

    public void setServingWeight8_g(double servingWeight8_g) {
        this.servingWeight8_g = servingWeight8_g;
    }

    public String getServingDescription8() {
        return servingDescription8;
    }

    public void setServingDescription8(String servingDescription8) {
        this.servingDescription8 = servingDescription8;
    }

    public double getServingWeight9_g() {
        return servingWeight9_g;
    }

    public void setServingWeight9_g(double servingWeight9_g) {
        this.servingWeight9_g = servingWeight9_g;
    }

    public String getServingDescription9() {
        return servingDescription9;
    }

    public void setServingDescription9(String servingDescription9) {
        this.servingDescription9 = servingDescription9;
    }

    public double getCalorieWeight_g() {
        return calorieWeight_g;
    }

    public void setCalorieWeight_g(double calorieWeight_g) {
        this.calorieWeight_g = calorieWeight_g;
    }
}
