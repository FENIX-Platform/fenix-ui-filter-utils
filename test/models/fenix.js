module.exports = {
    "metadata": {
        "creationDate": 1470693600000,
        "title": {"FR": "Nombre de personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance par département selon le sexe de l'épargnant."},
        "dsd": {
            "contextSystem": "cstat_cog",
            "datasources": ["D3S"],
            "columns": [{
                "dataType": "year",
                "title": {"EN": "année"},
                "values": {"timeList": [2015]},
                "subject": "time",
                "key": true,
                "id": "DIMENSION0"
            }, {
                "dataType": "code",
                "title": {"EN": "Indicateur"},
                "values": {"codes": [{"codes": [{"code": "04"}], "idCodeList": "Indicateurs_Recensement"}]},
                "domain": {"codes": [{"idCodeList": "Indicateurs_Recensement"}]},
                "subject": "census",
                "key": true,
                "id": "DIMENSION2"
            }, {
                "dataType": "code",
                "title": {"EN": "département"},
                "values": {
                    "codes": [{
                        "version": "2014",
                        "codes": [{"code": "190433"}, {"code": "976"}, {"code": "974"}, {"code": "970"}, {"code": "190431"}, {"code": "977"}, {"code": "971"}, {"code": "972"}, {"code": "979"}, {"code": "975"}, {"code": "190432"}, {"code": "190434"}],
                        "idCodeList": "GAUL"
                    }]
                },
                "domain": {"codes": [{"version": "2014", "idCodeList": "GAUL"}]},
                "subject": "geo",
                "key": true,
                "id": "DIMENSION3"
            }, {
                "dataType": "code",
                "title": {"EN": "sexe"},
                "values": {
                    "codes": [{
                        "codes": [{"code": "5001"}, {"code": "5002"}],
                        "idCodeList": "CountrySTAT_Gender"
                    }]
                },
                "domain": {"codes": [{"idCodeList": "CountrySTAT_Gender"}]},
                "subject": "gender",
                "key": true,
                "id": "DIMENSION4"
            }, {
                "dataType": "number",
                "title": {"EN": "valeur"},
                "subject": "value",
                "key": false,
                "id": "VALUE0"
            }, {
                "dataType": "text",
                "title": {"EN": "flag"},
                "subject": "flag",
                "key": false,
                "id": "OTHER0"
            }, {
                "dataType": "code",
                "title": {"EN": "unite"},
                "values": {"codes": [{"codes": [{"code": "0108"}], "idCodeList": "CountrySTAT_UM"}]},
                "domain": {"codes": [{"idCodeList": "CountrySTAT_UM"}]},
                "subject": "um",
                "key": false,
                "id": "OTHER1"
            }, {
                "dataType": "text",
                "title": {"EN": "Indicateur"},
                "virtual": false,
                "transposed": false,
                "key": false,
                "id": "DIMENSION2_EN"
            }, {
                "dataType": "text",
                "title": {"EN": "département"},
                "virtual": false,
                "transposed": false,
                "key": false,
                "id": "DIMENSION3_EN"
            }, {
                "dataType": "text",
                "title": {"EN": "sexe"},
                "virtual": false,
                "transposed": false,
                "key": false,
                "id": "DIMENSION4_EN"
            }, {
                "dataType": "text",
                "title": {"EN": "unite"},
                "virtual": false,
                "transposed": false,
                "key": false,
                "id": "OTHER1_EN"
            }]
        },
        "rid": "12_1471",
        "uid": "D3S_14778195442595102157551899783961806566",
        "meContent": {
            "resourceRepresentationType": "dataset",
            "seReferencePopulation": {
                "statisticalPopulation": {"FR": "ménage agricole"},
                "referencePeriod": {
                    "version": "1.0",
                    "codes": [{"code": "11", "label": {"EN": "Decay"}}],
                    "idCodeList": "FAO_Period",
                    "extendedName": {"EN": "FAO Reference Period"}
                },
                "referenceArea": {
                    "version": "1.0",
                    "codes": [{"code": "ADM1", "label": {"EN": "First level administrative boundaries"}}],
                    "idCodeList": "GAUL_ReferenceArea",
                    "extendedName": {"EN": "GAUL reference area"}
                }
            },
            "seCoverage": {
                "coverageTime": {"from": 1470780000000, "to": 1786312800000},
                "coverageGeographic": {
                    "version": "2014",
                    "codes": [{
                        "code": "59",
                        "label": {
                            "PT": "Repéblica do Congo",
                            "FR": "Congo",
                            "AR": "الكونغو",
                            "EN": "Congo",
                            "RU": "Конго",
                            "ES": "Congo",
                            "ZH": "刚 果"
                        }
                    }],
                    "idCodeList": "GAUL0",
                    "extendedName": {"EN": "Global administrative unit layer country level"}
                }
            },
            "resourceRepresentationTypeLabel": {"EN": "Dataset"}
        },
        "characterSet": {
            "codes": [{"code": "106", "label": {"EN": "UTF-8"}}],
            "idCodeList": "IANAcharacterSet",
            "extendedName": {"EN": "Internet Assigned Numbers Authority codelist"}
        },
        "metadataStandardName": "FENIX",
        "metadataStandardVersion": "1.0",
        "metadataLanguage": {
            "version": "1998",
            "codes": [{"code": "fre", "label": {"EN": "French"}}],
            "idCodeList": "ISO639-2",
            "extendedName": {"EN": "International Standard Organization - Language"}
        },
        "contacts": [{
            "position": {"FR": "Coordonnateur"},
            "organization": {"FR": "Ministère de l'Agriculture , de l'Elevage et de la pêche "},
            "role": "owner",
            "pointOfContact": "TSEMI Philippe",
            "specify": {"FR": "Coodination et Supervision"},
            "contactInfo": {
                "phone": "055385662/O66451639",
                "emailAddress": "philipptsemi@yahoo.fr",
                "hoursOfService": {"FR": "7h à 17h"},
                "address": "Enceinte Radio Rural"
            },
            "organizationUnit": {"FR": "BCRGA"},
            "roleLabel": {"EN": "Owner"}
        }],
        "meInstitutionalMandate": {"legalActsAgreements": {"FR": "Gouvernement /FAO"}},
        "meAccessibility": {
            "seDataDissemination": {
                "seReleasePolicy": {
                    "disseminationPeriodicity": {
                        "version": "1.0",
                        "codes": [{}],
                        "idCodeList": "FAO_Period",
                        "extendedName": {"EN": "FAO Reference Period"}
                    }, "embargoTime": {}
                }, "seDistribution": {}
            }
        },
        "meDataQuality": {"seAccuracy": {}, "seDataRevision": {}, "seComparability": {}},
        "meMaintenance": {
            "seUpdate": {
                "updateDate": 1472733016602,
                "updatePeriodicity": {
                    "version": "1.0",
                    "codes": [{}],
                    "idCodeList": "FAO_Period",
                    "extendedName": {"EN": "FAO Reference Period"}
                }
            }
        },
        "meStatisticalProcessing": {
            "seDataSource": {
                "sePrimaryDataCollection": {
                    "dataCollector": {"contactInfo": {}},
                    "typeOfCollection": {
                        "version": "1.0",
                        "codes": [{}],
                        "idCodeList": "FAOSTAT_Collection",
                        "extendedName": {"EN": "Type or usage of  the data collection"}
                    },
                    "collectionPeriodicity": {
                        "version": "1.0",
                        "codes": [{}],
                        "idCodeList": "FAO_Period",
                        "extendedName": {"EN": "FAO Reference Period"}
                    }
                },
                "seSecondaryDataCollection": {
                    "originOfCollectedData": {
                        "version": "1.0",
                        "codes": [{}],
                        "idCodeList": "FAOSTAT_OriginData",
                        "extendedName": {"EN": "Origin of collected data"}
                    }
                }
            },
            "seDataCompilation": {
                "dataAdjustment": {
                    "version": "1.1",
                    "codes": [{}],
                    "idCodeList": "CL_ADJUSTMENT",
                    "extendedName": {"EN": "Adjustment code list (ESTAT)"}
                }
            }
        },
        "language": {
            "version": "1998",
            "codes": [{"code": "fre", "label": {"EN": "French"}}],
            "idCodeList": "ISO639-2",
            "extendedName": {"EN": "International Standard Organization - Language"}
        }
    },
    "data": [[2015, "04", "190433", "5001", 68, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Kouilou", "Female", "units"], [2015, "04", "976", "5001", 659, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Niari", "Female", "units"], [2015, "04", "974", "5001", 336, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Lekoumou", "Female", "units"], [2015, "04", "970", "5001", 814, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Bouenza", "Female", "units"], [2015, "04", "190431", "5001", 629, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Pool", "Female", "units"], [2015, "04", "977", "5001", 300, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Plateaux", "Female", "units"], [2015, "04", "971", "5001", 422, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Cuvette", "Female", "units"], [2015, "04", "972", "5001", 153, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Cuvette-Ouest", "Female", "units"], [2015, "04", "979", "5001", 238, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Sangha", "Female", "units"], [2015, "04", "975", "5001", 233, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Likouala", "Female", "units"], [2015, "04", "190432", "5001", 307, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Brazzaville", "Female", "units"], [2015, "04", "190434", "5001", 144, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Point-Noire", "Female", "units"], [2015, "04", "190433", "5002", 297, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Kouilou", "Male", "units"], [2015, "04", "976", "5002", 1338, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Niari", "Male", "units"], [2015, "04", "974", "5002", 849, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Lekoumou", "Male", "units"], [2015, "04", "970", "5002", 2331, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Bouenza", "Male", "units"], [2015, "04", "190431", "5002", 1332, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Pool", "Male", "units"], [2015, "04", "977", "5002", 737, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Plateaux", "Male", "units"], [2015, "04", "971", "5002", 987, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Cuvette", "Male", "units"], [2015, "04", "972", "5002", 416, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Cuvette-Ouest", "Male", "units"], [2015, "04", "979", "5002", 880, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Sangha", "Male", "units"], [2015, "04", "975", "5002", 649, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Likouala", "Male", "units"], [2015, "04", "190432", "5002", 650, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Brazzaville", "Male", "units"], [2015, "04", "190434", "5002", 329, "", "0108", "Personnes âgées de 10 ans et plus, épargnant de l'argent dans une banque ou dans une institution de micro finance", "Point-Noire", "Male", "units"]],
    "size": 24
};