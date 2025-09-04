var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CPLASPARABAS_1 = new ol.format.GeoJSON();
var features_CPLASPARABAS_1 = format_CPLASPARABAS_1.readFeatures(json_CPLASPARABAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPLASPARABAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPLASPARABAS_1.addFeatures(features_CPLASPARABAS_1);
var lyr_CPLASPARABAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPLASPARABAS_1, 
                style: style_CPLASPARABAS_1,
                popuplayertitle: 'CP - LAS PARABAS',
                interactive: false,
    title: 'CP - LAS PARABAS<br />\
    <img src="styles/legend/CPLASPARABAS_1_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/CPLASPARABAS_1_1.png" /> AREA NO CULTIVADA<br />' });
var format_CPTUNARI_2 = new ol.format.GeoJSON();
var features_CPTUNARI_2 = format_CPTUNARI_2.readFeatures(json_CPTUNARI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPTUNARI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPTUNARI_2.addFeatures(features_CPTUNARI_2);
var lyr_CPTUNARI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPTUNARI_2, 
                style: style_CPTUNARI_2,
                popuplayertitle: 'CP - TUNARI',
                interactive: false,
    title: 'CP - TUNARI<br />\
    <img src="styles/legend/CPTUNARI_2_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/CPTUNARI_2_1.png" /> AREA NO CULTIVADA<br />' });
var format_CPBETANIA_3 = new ol.format.GeoJSON();
var features_CPBETANIA_3 = format_CPBETANIA_3.readFeatures(json_CPBETANIA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPBETANIA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPBETANIA_3.addFeatures(features_CPBETANIA_3);
var lyr_CPBETANIA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPBETANIA_3, 
                style: style_CPBETANIA_3,
                popuplayertitle: 'CP - BETANIA',
                interactive: false,
    title: 'CP - BETANIA<br />\
    <img src="styles/legend/CPBETANIA_3_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/CPBETANIA_3_1.png" /> AREA NO CULTIVADA<br />' });
var format_CPFERNANDEZALONSO_4 = new ol.format.GeoJSON();
var features_CPFERNANDEZALONSO_4 = format_CPFERNANDEZALONSO_4.readFeatures(json_CPFERNANDEZALONSO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPFERNANDEZALONSO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPFERNANDEZALONSO_4.addFeatures(features_CPFERNANDEZALONSO_4);
var lyr_CPFERNANDEZALONSO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPFERNANDEZALONSO_4, 
                style: style_CPFERNANDEZALONSO_4,
                popuplayertitle: 'CP - FERNANDEZ ALONSO',
                interactive: false,
    title: 'CP - FERNANDEZ ALONSO<br />\
    <img src="styles/legend/CPFERNANDEZALONSO_4_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/CPFERNANDEZALONSO_4_1.png" /> AREA NO CULTIVADA<br />' });
var format_CPCOMUNIDADRUSATOBOROCHI_5 = new ol.format.GeoJSON();
var features_CPCOMUNIDADRUSATOBOROCHI_5 = format_CPCOMUNIDADRUSATOBOROCHI_5.readFeatures(json_CPCOMUNIDADRUSATOBOROCHI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPCOMUNIDADRUSATOBOROCHI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPCOMUNIDADRUSATOBOROCHI_5.addFeatures(features_CPCOMUNIDADRUSATOBOROCHI_5);
var lyr_CPCOMUNIDADRUSATOBOROCHI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPCOMUNIDADRUSATOBOROCHI_5, 
                style: style_CPCOMUNIDADRUSATOBOROCHI_5,
                popuplayertitle: 'CP - COMUNIDAD RUSA TOBOROCHI',
                interactive: true,
    title: 'CP - COMUNIDAD RUSA TOBOROCHI<br />\
    <img src="styles/legend/CPCOMUNIDADRUSATOBOROCHI_5_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/CPCOMUNIDADRUSATOBOROCHI_5_1.png" /> AREA NO CULTIVADA<br />' });
var format_CPCHANEINDEPENDENCIA_6 = new ol.format.GeoJSON();
var features_CPCHANEINDEPENDENCIA_6 = format_CPCHANEINDEPENDENCIA_6.readFeatures(json_CPCHANEINDEPENDENCIA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPCHANEINDEPENDENCIA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPCHANEINDEPENDENCIA_6.addFeatures(features_CPCHANEINDEPENDENCIA_6);
var lyr_CPCHANEINDEPENDENCIA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPCHANEINDEPENDENCIA_6, 
                style: style_CPCHANEINDEPENDENCIA_6,
                popuplayertitle: 'CP - CHANE INDEPENDENCIA',
                interactive: false,
    title: 'CP - CHANE INDEPENDENCIA<br />\
    <img src="styles/legend/CPCHANEINDEPENDENCIA_6_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/CPCHANEINDEPENDENCIA_6_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE15AE16FLORDELVALLE_7 = new ol.format.GeoJSON();
var features_AE15AE16FLORDELVALLE_7 = format_AE15AE16FLORDELVALLE_7.readFeatures(json_AE15AE16FLORDELVALLE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE15AE16FLORDELVALLE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE15AE16FLORDELVALLE_7.addFeatures(features_AE15AE16FLORDELVALLE_7);
var lyr_AE15AE16FLORDELVALLE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE15AE16FLORDELVALLE_7, 
                style: style_AE15AE16FLORDELVALLE_7,
                popuplayertitle: 'AE - 15 - AE - 16 - FLOR DEL VALLE',
                interactive: false,
    title: 'AE - 15 - AE - 16 - FLOR DEL VALLE<br />\
    <img src="styles/legend/AE15AE16FLORDELVALLE_7_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE15AE16FLORDELVALLE_7_1.png" /> AREA NO CULTIVADA<br />' });
var format_14VILLAPROGRESO_8 = new ol.format.GeoJSON();
var features_14VILLAPROGRESO_8 = format_14VILLAPROGRESO_8.readFeatures(json_14VILLAPROGRESO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14VILLAPROGRESO_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14VILLAPROGRESO_8.addFeatures(features_14VILLAPROGRESO_8);
var lyr_14VILLAPROGRESO_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14VILLAPROGRESO_8, 
                style: style_14VILLAPROGRESO_8,
                popuplayertitle: '14 - VILLA PROGRESO',
                interactive: false,
    title: '14 - VILLA PROGRESO<br />\
    <img src="styles/legend/14VILLAPROGRESO_8_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/14VILLAPROGRESO_8_1.png" /> AREA NO CULTIVADA<br />' });
var format_14ESTRELLAHORIZONTE_9 = new ol.format.GeoJSON();
var features_14ESTRELLAHORIZONTE_9 = format_14ESTRELLAHORIZONTE_9.readFeatures(json_14ESTRELLAHORIZONTE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14ESTRELLAHORIZONTE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14ESTRELLAHORIZONTE_9.addFeatures(features_14ESTRELLAHORIZONTE_9);
var lyr_14ESTRELLAHORIZONTE_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14ESTRELLAHORIZONTE_9, 
                style: style_14ESTRELLAHORIZONTE_9,
                popuplayertitle: '14 - ESTRELLA-HORIZONTE',
                interactive: false,
    title: '14 - ESTRELLA-HORIZONTE<br />\
    <img src="styles/legend/14ESTRELLAHORIZONTE_9_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/14ESTRELLAHORIZONTE_9_1.png" /> AREA NO CULTIVADA<br />' });
var format_13PORTON_10 = new ol.format.GeoJSON();
var features_13PORTON_10 = format_13PORTON_10.readFeatures(json_13PORTON_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13PORTON_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13PORTON_10.addFeatures(features_13PORTON_10);
var lyr_13PORTON_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13PORTON_10, 
                style: style_13PORTON_10,
                popuplayertitle: '13 - PORTON',
                interactive: false,
    title: '13 - PORTON<br />\
    <img src="styles/legend/13PORTON_10_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/13PORTON_10_1.png" /> AREA NO CULTIVADA<br />' });
var format_13HACIENDAGRANJABASILIOELGRANDE_11 = new ol.format.GeoJSON();
var features_13HACIENDAGRANJABASILIOELGRANDE_11 = format_13HACIENDAGRANJABASILIOELGRANDE_11.readFeatures(json_13HACIENDAGRANJABASILIOELGRANDE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13HACIENDAGRANJABASILIOELGRANDE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13HACIENDAGRANJABASILIOELGRANDE_11.addFeatures(features_13HACIENDAGRANJABASILIOELGRANDE_11);
var lyr_13HACIENDAGRANJABASILIOELGRANDE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13HACIENDAGRANJABASILIOELGRANDE_11, 
                style: style_13HACIENDAGRANJABASILIOELGRANDE_11,
                popuplayertitle: '13 - HACIENDA GRANJA BASILIO EL GRANDE',
                interactive: false,
    title: '13 - HACIENDA GRANJA BASILIO EL GRANDE<br />\
    <img src="styles/legend/13HACIENDAGRANJABASILIOELGRANDE_11_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/13HACIENDAGRANJABASILIOELGRANDE_11_1.png" /> AREA NO CULTIVADA<br />' });
var format_13HACIENDAPROPIEDADCAMPOGRANDE_12 = new ol.format.GeoJSON();
var features_13HACIENDAPROPIEDADCAMPOGRANDE_12 = format_13HACIENDAPROPIEDADCAMPOGRANDE_12.readFeatures(json_13HACIENDAPROPIEDADCAMPOGRANDE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13HACIENDAPROPIEDADCAMPOGRANDE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13HACIENDAPROPIEDADCAMPOGRANDE_12.addFeatures(features_13HACIENDAPROPIEDADCAMPOGRANDE_12);
var lyr_13HACIENDAPROPIEDADCAMPOGRANDE_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13HACIENDAPROPIEDADCAMPOGRANDE_12, 
                style: style_13HACIENDAPROPIEDADCAMPOGRANDE_12,
                popuplayertitle: '13 - HACIENDA PROPIEDAD CAMPO GRANDE',
                interactive: false,
    title: '13 - HACIENDA PROPIEDAD CAMPO GRANDE<br />\
    <img src="styles/legend/13HACIENDAPROPIEDADCAMPOGRANDE_12_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/13HACIENDAPROPIEDADCAMPOGRANDE_12_1.png" /> AREA NO CULTIVADA<br />' });
var format_13HACIENDAPROPIEDADVICTORPAZ_13 = new ol.format.GeoJSON();
var features_13HACIENDAPROPIEDADVICTORPAZ_13 = format_13HACIENDAPROPIEDADVICTORPAZ_13.readFeatures(json_13HACIENDAPROPIEDADVICTORPAZ_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13HACIENDAPROPIEDADVICTORPAZ_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13HACIENDAPROPIEDADVICTORPAZ_13.addFeatures(features_13HACIENDAPROPIEDADVICTORPAZ_13);
var lyr_13HACIENDAPROPIEDADVICTORPAZ_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13HACIENDAPROPIEDADVICTORPAZ_13, 
                style: style_13HACIENDAPROPIEDADVICTORPAZ_13,
                popuplayertitle: '13 - HACIENDA PROPIEDAD VICTOR PAZ',
                interactive: false,
    title: '13 - HACIENDA PROPIEDAD VICTOR PAZ<br />\
    <img src="styles/legend/13HACIENDAPROPIEDADVICTORPAZ_13_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/13HACIENDAPROPIEDADVICTORPAZ_13_1.png" /> AREA NO CULTIVADA<br />' });
var format_12FAJACHOROLQUE_14 = new ol.format.GeoJSON();
var features_12FAJACHOROLQUE_14 = format_12FAJACHOROLQUE_14.readFeatures(json_12FAJACHOROLQUE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12FAJACHOROLQUE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12FAJACHOROLQUE_14.addFeatures(features_12FAJACHOROLQUE_14);
var lyr_12FAJACHOROLQUE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12FAJACHOROLQUE_14, 
                style: style_12FAJACHOROLQUE_14,
                popuplayertitle: '12 - FAJA CHOROLQUE',
                interactive: false,
    title: '12 - FAJA CHOROLQUE<br />\
    <img src="styles/legend/12FAJACHOROLQUE_14_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/12FAJACHOROLQUE_14_1.png" /> AREA NO CULTIVADA<br />' });
var format_12FAJACOTOCA_15 = new ol.format.GeoJSON();
var features_12FAJACOTOCA_15 = format_12FAJACOTOCA_15.readFeatures(json_12FAJACOTOCA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12FAJACOTOCA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12FAJACOTOCA_15.addFeatures(features_12FAJACOTOCA_15);
var lyr_12FAJACOTOCA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12FAJACOTOCA_15, 
                style: style_12FAJACOTOCA_15,
                popuplayertitle: '12 - FAJA COTOCA',
                interactive: false,
    title: '12 - FAJA COTOCA<br />\
    <img src="styles/legend/12FAJACOTOCA_15_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/12FAJACOTOCA_15_1.png" /> AREA NO CULTIVADA<br />' });
var format_11FAJAKUMALI_16 = new ol.format.GeoJSON();
var features_11FAJAKUMALI_16 = format_11FAJAKUMALI_16.readFeatures(json_11FAJAKUMALI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11FAJAKUMALI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11FAJAKUMALI_16.addFeatures(features_11FAJAKUMALI_16);
var lyr_11FAJAKUMALI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11FAJAKUMALI_16, 
                style: style_11FAJAKUMALI_16,
                popuplayertitle: '11 - FAJA KUMALI',
                interactive: false,
    title: '11 - FAJA KUMALI<br />\
    <img src="styles/legend/11FAJAKUMALI_16_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/11FAJAKUMALI_16_1.png" /> AREA NO CULTIVADA<br />' });
var format_11FAJAROCABADO_17 = new ol.format.GeoJSON();
var features_11FAJAROCABADO_17 = format_11FAJAROCABADO_17.readFeatures(json_11FAJAROCABADO_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11FAJAROCABADO_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11FAJAROCABADO_17.addFeatures(features_11FAJAROCABADO_17);
var lyr_11FAJAROCABADO_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11FAJAROCABADO_17, 
                style: style_11FAJAROCABADO_17,
                popuplayertitle: '11 - FAJA ROCABADO',
                interactive: false,
    title: '11 - FAJA ROCABADO<br />\
    <img src="styles/legend/11FAJAROCABADO_17_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/11FAJAROCABADO_17_1.png" /> AREA NO CULTIVADA<br />' });
var format_10ELBAJIAL_18 = new ol.format.GeoJSON();
var features_10ELBAJIAL_18 = format_10ELBAJIAL_18.readFeatures(json_10ELBAJIAL_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10ELBAJIAL_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10ELBAJIAL_18.addFeatures(features_10ELBAJIAL_18);
var lyr_10ELBAJIAL_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10ELBAJIAL_18, 
                style: style_10ELBAJIAL_18,
                popuplayertitle: '10 - EL BAJIAL',
                interactive: true,
    title: '10 - EL BAJIAL<br />\
    <img src="styles/legend/10ELBAJIAL_18_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/10ELBAJIAL_18_1.png" /> AREA NO CULTIVADA<br />' });
var format_10FAJAPORTONCOTAGAITA_19 = new ol.format.GeoJSON();
var features_10FAJAPORTONCOTAGAITA_19 = format_10FAJAPORTONCOTAGAITA_19.readFeatures(json_10FAJAPORTONCOTAGAITA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10FAJAPORTONCOTAGAITA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10FAJAPORTONCOTAGAITA_19.addFeatures(features_10FAJAPORTONCOTAGAITA_19);
var lyr_10FAJAPORTONCOTAGAITA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10FAJAPORTONCOTAGAITA_19, 
                style: style_10FAJAPORTONCOTAGAITA_19,
                popuplayertitle: '10 - FAJA PORTON COTAGAITA',
                interactive: false,
    title: '10 - FAJA PORTON COTAGAITA<br />\
    <img src="styles/legend/10FAJAPORTONCOTAGAITA_19_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/10FAJAPORTONCOTAGAITA_19_1.png" /> AREA NO CULTIVADA<br />' });
var format_10HACIENDAPROPIEDADSANJORGE_20 = new ol.format.GeoJSON();
var features_10HACIENDAPROPIEDADSANJORGE_20 = format_10HACIENDAPROPIEDADSANJORGE_20.readFeatures(json_10HACIENDAPROPIEDADSANJORGE_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10HACIENDAPROPIEDADSANJORGE_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10HACIENDAPROPIEDADSANJORGE_20.addFeatures(features_10HACIENDAPROPIEDADSANJORGE_20);
var lyr_10HACIENDAPROPIEDADSANJORGE_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10HACIENDAPROPIEDADSANJORGE_20, 
                style: style_10HACIENDAPROPIEDADSANJORGE_20,
                popuplayertitle: '10 - HACIENDA PROPIEDAD SAN JORGE',
                interactive: false,
    title: '10 - HACIENDA PROPIEDAD SAN JORGE<br />\
    <img src="styles/legend/10HACIENDAPROPIEDADSANJORGE_20_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/10HACIENDAPROPIEDADSANJORGE_20_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE09MOTACUSAL_21 = new ol.format.GeoJSON();
var features_AE09MOTACUSAL_21 = format_AE09MOTACUSAL_21.readFeatures(json_AE09MOTACUSAL_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE09MOTACUSAL_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE09MOTACUSAL_21.addFeatures(features_AE09MOTACUSAL_21);
var lyr_AE09MOTACUSAL_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE09MOTACUSAL_21, 
                style: style_AE09MOTACUSAL_21,
                popuplayertitle: 'AE - 09 - MOTACUSAL',
                interactive: false,
    title: 'AE - 09 - MOTACUSAL<br />\
    <img src="styles/legend/AE09MOTACUSAL_21_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE09MOTACUSAL_21_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22 = new ol.format.GeoJSON();
var features_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22 = format_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22.readFeatures(json_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22.addFeatures(features_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22);
var lyr_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22, 
                style: style_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22,
                popuplayertitle: 'AE - 8 - AE - 09 - SINDICATO AGRARIO CHANE MAGALLANES',
                interactive: false,
    title: 'AE - 8 - AE - 09 - SINDICATO AGRARIO CHANE MAGALLANES<br />\
    <img src="styles/legend/AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22_1.png" /> AREA NO CULTIVADA<br />' });
var format_07ESTANCIAPROPIEDADJUANPADILLA_23 = new ol.format.GeoJSON();
var features_07ESTANCIAPROPIEDADJUANPADILLA_23 = format_07ESTANCIAPROPIEDADJUANPADILLA_23.readFeatures(json_07ESTANCIAPROPIEDADJUANPADILLA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07ESTANCIAPROPIEDADJUANPADILLA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07ESTANCIAPROPIEDADJUANPADILLA_23.addFeatures(features_07ESTANCIAPROPIEDADJUANPADILLA_23);
var lyr_07ESTANCIAPROPIEDADJUANPADILLA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07ESTANCIAPROPIEDADJUANPADILLA_23, 
                style: style_07ESTANCIAPROPIEDADJUANPADILLA_23,
                popuplayertitle: '07 - ESTANCIA PROPIEDAD JUAN PADILLA',
                interactive: false,
    title: '07 - ESTANCIA PROPIEDAD JUAN PADILLA<br />\
    <img src="styles/legend/07ESTANCIAPROPIEDADJUANPADILLA_23_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/07ESTANCIAPROPIEDADJUANPADILLA_23_1.png" /> AREA NO CULTIVADA<br />' });
var format_07FAJA9DEABRIL_24 = new ol.format.GeoJSON();
var features_07FAJA9DEABRIL_24 = format_07FAJA9DEABRIL_24.readFeatures(json_07FAJA9DEABRIL_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07FAJA9DEABRIL_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07FAJA9DEABRIL_24.addFeatures(features_07FAJA9DEABRIL_24);
var lyr_07FAJA9DEABRIL_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07FAJA9DEABRIL_24, 
                style: style_07FAJA9DEABRIL_24,
                popuplayertitle: '07 - FAJA 9 DE ABRIL',
                interactive: false,
    title: '07 - FAJA 9 DE ABRIL<br />\
    <img src="styles/legend/07FAJA9DEABRIL_24_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/07FAJA9DEABRIL_24_1.png" /> AREA NO CULTIVADA<br />' });
var format_07HACIENDAPROPIEDADLAREPRESA_25 = new ol.format.GeoJSON();
var features_07HACIENDAPROPIEDADLAREPRESA_25 = format_07HACIENDAPROPIEDADLAREPRESA_25.readFeatures(json_07HACIENDAPROPIEDADLAREPRESA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07HACIENDAPROPIEDADLAREPRESA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07HACIENDAPROPIEDADLAREPRESA_25.addFeatures(features_07HACIENDAPROPIEDADLAREPRESA_25);
var lyr_07HACIENDAPROPIEDADLAREPRESA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07HACIENDAPROPIEDADLAREPRESA_25, 
                style: style_07HACIENDAPROPIEDADLAREPRESA_25,
                popuplayertitle: '07 - HACIENDA PROPIEDAD LA REPRESA',
                interactive: false,
    title: '07 - HACIENDA PROPIEDAD LA REPRESA<br />\
    <img src="styles/legend/07HACIENDAPROPIEDADLAREPRESA_25_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/07HACIENDAPROPIEDADLAREPRESA_25_1.png" /> AREA NO CULTIVADA<br />' });
var format_07HACIENDAPROPIEDADLOSMUECOS_26 = new ol.format.GeoJSON();
var features_07HACIENDAPROPIEDADLOSMUECOS_26 = format_07HACIENDAPROPIEDADLOSMUECOS_26.readFeatures(json_07HACIENDAPROPIEDADLOSMUECOS_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07HACIENDAPROPIEDADLOSMUECOS_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07HACIENDAPROPIEDADLOSMUECOS_26.addFeatures(features_07HACIENDAPROPIEDADLOSMUECOS_26);
var lyr_07HACIENDAPROPIEDADLOSMUECOS_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07HACIENDAPROPIEDADLOSMUECOS_26, 
                style: style_07HACIENDAPROPIEDADLOSMUECOS_26,
                popuplayertitle: '07 - HACIENDA PROPIEDAD LOS MUÑECOS',
                interactive: false,
    title: '07 - HACIENDA PROPIEDAD LOS MUÑECOS<br />\
    <img src="styles/legend/07HACIENDAPROPIEDADLOSMUECOS_26_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/07HACIENDAPROPIEDADLOSMUECOS_26_1.png" /> AREA NO CULTIVADA<br />' });
var format_07HACIENDAPROPIEDADSANMARCO_27 = new ol.format.GeoJSON();
var features_07HACIENDAPROPIEDADSANMARCO_27 = format_07HACIENDAPROPIEDADSANMARCO_27.readFeatures(json_07HACIENDAPROPIEDADSANMARCO_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07HACIENDAPROPIEDADSANMARCO_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07HACIENDAPROPIEDADSANMARCO_27.addFeatures(features_07HACIENDAPROPIEDADSANMARCO_27);
var lyr_07HACIENDAPROPIEDADSANMARCO_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07HACIENDAPROPIEDADSANMARCO_27, 
                style: style_07HACIENDAPROPIEDADSANMARCO_27,
                popuplayertitle: '07 - HACIENDA PROPIEDAD SAN MARCO',
                interactive: false,
    title: '07 - HACIENDA PROPIEDAD SAN MARCO<br />\
    <img src="styles/legend/07HACIENDAPROPIEDADSANMARCO_27_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/07HACIENDAPROPIEDADSANMARCO_27_1.png" /> AREA NO CULTIVADA<br />' });
var format_07HACIENDAPROPIEDADVILLAFATIMA_28 = new ol.format.GeoJSON();
var features_07HACIENDAPROPIEDADVILLAFATIMA_28 = format_07HACIENDAPROPIEDADVILLAFATIMA_28.readFeatures(json_07HACIENDAPROPIEDADVILLAFATIMA_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07HACIENDAPROPIEDADVILLAFATIMA_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07HACIENDAPROPIEDADVILLAFATIMA_28.addFeatures(features_07HACIENDAPROPIEDADVILLAFATIMA_28);
var lyr_07HACIENDAPROPIEDADVILLAFATIMA_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07HACIENDAPROPIEDADVILLAFATIMA_28, 
                style: style_07HACIENDAPROPIEDADVILLAFATIMA_28,
                popuplayertitle: '07 - HACIENDA PROPIEDAD VILLA FATIMA',
                interactive: false,
    title: '07 - HACIENDA PROPIEDAD VILLA FATIMA<br />\
    <img src="styles/legend/07HACIENDAPROPIEDADVILLAFATIMA_28_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/07HACIENDAPROPIEDADVILLAFATIMA_28_1.png" /> AREA NO CULTIVADA<br />' });
var format_06SANLORENZO_29 = new ol.format.GeoJSON();
var features_06SANLORENZO_29 = format_06SANLORENZO_29.readFeatures(json_06SANLORENZO_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06SANLORENZO_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06SANLORENZO_29.addFeatures(features_06SANLORENZO_29);
var lyr_06SANLORENZO_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06SANLORENZO_29, 
                style: style_06SANLORENZO_29,
                popuplayertitle: '06 - SAN LORENZO',
                interactive: false,
    title: '06 - SAN LORENZO<br />\
    <img src="styles/legend/06SANLORENZO_29_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/06SANLORENZO_29_1.png" /> AREA NO CULTIVADA<br />' });
var format_06SANMARCOS_30 = new ol.format.GeoJSON();
var features_06SANMARCOS_30 = format_06SANMARCOS_30.readFeatures(json_06SANMARCOS_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06SANMARCOS_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06SANMARCOS_30.addFeatures(features_06SANMARCOS_30);
var lyr_06SANMARCOS_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06SANMARCOS_30, 
                style: style_06SANMARCOS_30,
                popuplayertitle: '06 - SAN MARCOS',
                interactive: false,
    title: '06 - SAN MARCOS<br />\
    <img src="styles/legend/06SANMARCOS_30_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/06SANMARCOS_30_1.png" /> AREA NO CULTIVADA<br />' });
var format_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31 = new ol.format.GeoJSON();
var features_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31 = format_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31.readFeatures(json_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31.addFeatures(features_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31);
var lyr_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31, 
                style: style_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31,
                popuplayertitle: '06 - HACIENDA PROPIEDAD SAN JORGE - AGRIPAC',
                interactive: false,
    title: '06 - HACIENDA PROPIEDAD SAN JORGE - AGRIPAC<br />\
    <img src="styles/legend/06HACIENDAPROPIEDADSANJORGEAGRIPAC_31_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/06HACIENDAPROPIEDADSANJORGEAGRIPAC_31_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE055DEMARZO_32 = new ol.format.GeoJSON();
var features_AE055DEMARZO_32 = format_AE055DEMARZO_32.readFeatures(json_AE055DEMARZO_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE055DEMARZO_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE055DEMARZO_32.addFeatures(features_AE055DEMARZO_32);
var lyr_AE055DEMARZO_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE055DEMARZO_32, 
                style: style_AE055DEMARZO_32,
                popuplayertitle: 'AE - 05 - 5 DE MARZO',
                interactive: true,
    title: 'AE - 05 - 5 DE MARZO<br />\
    <img src="styles/legend/AE055DEMARZO_32_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE055DEMARZO_32_1.png" /> AREA NO CULTIVADA<br />' });
var format_04MONTERICO_33 = new ol.format.GeoJSON();
var features_04MONTERICO_33 = format_04MONTERICO_33.readFeatures(json_04MONTERICO_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04MONTERICO_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04MONTERICO_33.addFeatures(features_04MONTERICO_33);
var lyr_04MONTERICO_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04MONTERICO_33, 
                style: style_04MONTERICO_33,
                popuplayertitle: '04 - MONTE RICO',
                interactive: false,
    title: '04 - MONTE RICO<br />\
    <img src="styles/legend/04MONTERICO_33_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/04MONTERICO_33_1.png" /> AREA NO CULTIVADA<br />' });
var format_04TOBOROCHI_34 = new ol.format.GeoJSON();
var features_04TOBOROCHI_34 = format_04TOBOROCHI_34.readFeatures(json_04TOBOROCHI_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04TOBOROCHI_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04TOBOROCHI_34.addFeatures(features_04TOBOROCHI_34);
var lyr_04TOBOROCHI_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04TOBOROCHI_34, 
                style: style_04TOBOROCHI_34,
                popuplayertitle: '04 - TOBOROCHI',
                interactive: false,
    title: '04 - TOBOROCHI<br />\
    <img src="styles/legend/04TOBOROCHI_34_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/04TOBOROCHI_34_1.png" /> AREA NO CULTIVADA<br />' });
var format_04HACIENDAJISUNU_35 = new ol.format.GeoJSON();
var features_04HACIENDAJISUNU_35 = format_04HACIENDAJISUNU_35.readFeatures(json_04HACIENDAJISUNU_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04HACIENDAJISUNU_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04HACIENDAJISUNU_35.addFeatures(features_04HACIENDAJISUNU_35);
var lyr_04HACIENDAJISUNU_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04HACIENDAJISUNU_35, 
                style: style_04HACIENDAJISUNU_35,
                popuplayertitle: '04 - HACIENDA JISUNU',
                interactive: false,
    title: '04 - HACIENDA JISUNU<br />\
    <img src="styles/legend/04HACIENDAJISUNU_35_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/04HACIENDAJISUNU_35_1.png" /> AREA NO CULTIVADA<br />' });
var format_04HACIENDAPROPIEDADAGROSUAREZ_36 = new ol.format.GeoJSON();
var features_04HACIENDAPROPIEDADAGROSUAREZ_36 = format_04HACIENDAPROPIEDADAGROSUAREZ_36.readFeatures(json_04HACIENDAPROPIEDADAGROSUAREZ_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04HACIENDAPROPIEDADAGROSUAREZ_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04HACIENDAPROPIEDADAGROSUAREZ_36.addFeatures(features_04HACIENDAPROPIEDADAGROSUAREZ_36);
var lyr_04HACIENDAPROPIEDADAGROSUAREZ_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04HACIENDAPROPIEDADAGROSUAREZ_36, 
                style: style_04HACIENDAPROPIEDADAGROSUAREZ_36,
                popuplayertitle: '04 - HACIENDA PROPIEDAD AGRO SUAREZ',
                interactive: false,
    title: '04 - HACIENDA PROPIEDAD AGRO SUAREZ<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADAGROSUAREZ_36_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADAGROSUAREZ_36_1.png" /> AREA NO CULTIVADA<br />' });
var format_04HACIENDAPROPIEDADLABALANZA_37 = new ol.format.GeoJSON();
var features_04HACIENDAPROPIEDADLABALANZA_37 = format_04HACIENDAPROPIEDADLABALANZA_37.readFeatures(json_04HACIENDAPROPIEDADLABALANZA_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04HACIENDAPROPIEDADLABALANZA_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04HACIENDAPROPIEDADLABALANZA_37.addFeatures(features_04HACIENDAPROPIEDADLABALANZA_37);
var lyr_04HACIENDAPROPIEDADLABALANZA_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04HACIENDAPROPIEDADLABALANZA_37, 
                style: style_04HACIENDAPROPIEDADLABALANZA_37,
                popuplayertitle: '04 - HACIENDA PROPIEDAD LA BALANZA',
                interactive: false,
    title: '04 - HACIENDA PROPIEDAD LA BALANZA<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADLABALANZA_37_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADLABALANZA_37_1.png" /> AREA NO CULTIVADA<br />' });
var format_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38 = new ol.format.GeoJSON();
var features_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38 = format_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38.readFeatures(json_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38.addFeatures(features_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38);
var lyr_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38, 
                style: style_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38,
                popuplayertitle: '04 - HACIENDA PROPIEDAD RUSA CACHUELA ESPERANZA',
                interactive: false,
    title: '04 - HACIENDA PROPIEDAD RUSA CACHUELA ESPERANZA<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38_1.png" /> AREA NO CULTIVADA<br />' });
var format_04HACIENDAPROPIEDADSANSIMON_39 = new ol.format.GeoJSON();
var features_04HACIENDAPROPIEDADSANSIMON_39 = format_04HACIENDAPROPIEDADSANSIMON_39.readFeatures(json_04HACIENDAPROPIEDADSANSIMON_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04HACIENDAPROPIEDADSANSIMON_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04HACIENDAPROPIEDADSANSIMON_39.addFeatures(features_04HACIENDAPROPIEDADSANSIMON_39);
var lyr_04HACIENDAPROPIEDADSANSIMON_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04HACIENDAPROPIEDADSANSIMON_39, 
                style: style_04HACIENDAPROPIEDADSANSIMON_39,
                popuplayertitle: '04 - HACIENDA PROPIEDAD SAN SIMON',
                interactive: false,
    title: '04 - HACIENDA PROPIEDAD SAN SIMON<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADSANSIMON_39_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADSANSIMON_39_1.png" /> AREA NO CULTIVADA<br />' });
var format_04HACIENDAPROPIEDADSUIZARIOGRANDE_40 = new ol.format.GeoJSON();
var features_04HACIENDAPROPIEDADSUIZARIOGRANDE_40 = format_04HACIENDAPROPIEDADSUIZARIOGRANDE_40.readFeatures(json_04HACIENDAPROPIEDADSUIZARIOGRANDE_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04HACIENDAPROPIEDADSUIZARIOGRANDE_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04HACIENDAPROPIEDADSUIZARIOGRANDE_40.addFeatures(features_04HACIENDAPROPIEDADSUIZARIOGRANDE_40);
var lyr_04HACIENDAPROPIEDADSUIZARIOGRANDE_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04HACIENDAPROPIEDADSUIZARIOGRANDE_40, 
                style: style_04HACIENDAPROPIEDADSUIZARIOGRANDE_40,
                popuplayertitle: '04 - HACIENDA PROPIEDAD SUIZA RIO GRANDE',
                interactive: false,
    title: '04 - HACIENDA PROPIEDAD SUIZA RIO GRANDE<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADSUIZARIOGRANDE_40_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/04HACIENDAPROPIEDADSUIZARIOGRANDE_40_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDAPROPIEDADVILLANUEVAI_41 = new ol.format.GeoJSON();
var features_03HACIENDAPROPIEDADVILLANUEVAI_41 = format_03HACIENDAPROPIEDADVILLANUEVAI_41.readFeatures(json_03HACIENDAPROPIEDADVILLANUEVAI_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDAPROPIEDADVILLANUEVAI_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDAPROPIEDADVILLANUEVAI_41.addFeatures(features_03HACIENDAPROPIEDADVILLANUEVAI_41);
var lyr_03HACIENDAPROPIEDADVILLANUEVAI_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDAPROPIEDADVILLANUEVAI_41, 
                style: style_03HACIENDAPROPIEDADVILLANUEVAI_41,
                popuplayertitle: '03 - HACIENDA PROPIEDAD VILLANUEVA I',
                interactive: true,
    title: '03 - HACIENDA PROPIEDAD VILLANUEVA I<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADVILLANUEVAI_41_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADVILLANUEVAI_41_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDAPROPIEDADYUPANQUI_42 = new ol.format.GeoJSON();
var features_03HACIENDAPROPIEDADYUPANQUI_42 = format_03HACIENDAPROPIEDADYUPANQUI_42.readFeatures(json_03HACIENDAPROPIEDADYUPANQUI_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDAPROPIEDADYUPANQUI_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDAPROPIEDADYUPANQUI_42.addFeatures(features_03HACIENDAPROPIEDADYUPANQUI_42);
var lyr_03HACIENDAPROPIEDADYUPANQUI_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDAPROPIEDADYUPANQUI_42, 
                style: style_03HACIENDAPROPIEDADYUPANQUI_42,
                popuplayertitle: '03 - HACIENDA PROPIEDAD YUPANQUI',
                interactive: true,
    title: '03 - HACIENDA PROPIEDAD YUPANQUI<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADYUPANQUI_42_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADYUPANQUI_42_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDA_43 = new ol.format.GeoJSON();
var features_03HACIENDA_43 = format_03HACIENDA_43.readFeatures(json_03HACIENDA_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDA_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDA_43.addFeatures(features_03HACIENDA_43);
var lyr_03HACIENDA_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDA_43, 
                style: style_03HACIENDA_43,
                popuplayertitle: '03 - HACIENDA',
                interactive: true,
    title: '03 - HACIENDA<br />\
    <img src="styles/legend/03HACIENDA_43_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDA_43_1.png" /> AREA NO CULTIVADA<br />' });
var format_03PROPIEDADSANMARTIN_44 = new ol.format.GeoJSON();
var features_03PROPIEDADSANMARTIN_44 = format_03PROPIEDADSANMARTIN_44.readFeatures(json_03PROPIEDADSANMARTIN_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03PROPIEDADSANMARTIN_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03PROPIEDADSANMARTIN_44.addFeatures(features_03PROPIEDADSANMARTIN_44);
var lyr_03PROPIEDADSANMARTIN_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03PROPIEDADSANMARTIN_44, 
                style: style_03PROPIEDADSANMARTIN_44,
                popuplayertitle: '03 - PROPIEDAD SAN MARTIN',
                interactive: false,
    title: '03 - PROPIEDAD SAN MARTIN<br />\
    <img src="styles/legend/03PROPIEDADSANMARTIN_44_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03PROPIEDADSANMARTIN_44_1.png" /> AREA NO CULTIVADA<br />' });
var format_03CACHUELAESPERANZA_45 = new ol.format.GeoJSON();
var features_03CACHUELAESPERANZA_45 = format_03CACHUELAESPERANZA_45.readFeatures(json_03CACHUELAESPERANZA_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03CACHUELAESPERANZA_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03CACHUELAESPERANZA_45.addFeatures(features_03CACHUELAESPERANZA_45);
var lyr_03CACHUELAESPERANZA_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03CACHUELAESPERANZA_45, 
                style: style_03CACHUELAESPERANZA_45,
                popuplayertitle: '03 - CACHUELA ESPERANZA',
                interactive: false,
    title: '03 - CACHUELA ESPERANZA<br />\
    <img src="styles/legend/03CACHUELAESPERANZA_45_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03CACHUELAESPERANZA_45_1.png" /> AREA NO CULTIVADA<br />' });
var format_03ESTANCIAPROPIEDADLOSPAUROS_46 = new ol.format.GeoJSON();
var features_03ESTANCIAPROPIEDADLOSPAUROS_46 = format_03ESTANCIAPROPIEDADLOSPAUROS_46.readFeatures(json_03ESTANCIAPROPIEDADLOSPAUROS_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03ESTANCIAPROPIEDADLOSPAUROS_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03ESTANCIAPROPIEDADLOSPAUROS_46.addFeatures(features_03ESTANCIAPROPIEDADLOSPAUROS_46);
var lyr_03ESTANCIAPROPIEDADLOSPAUROS_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03ESTANCIAPROPIEDADLOSPAUROS_46, 
                style: style_03ESTANCIAPROPIEDADLOSPAUROS_46,
                popuplayertitle: '03 - ESTANCIA PROPIEDAD LOS PAUROS',
                interactive: false,
    title: '03 - ESTANCIA PROPIEDAD LOS PAUROS<br />\
    <img src="styles/legend/03ESTANCIAPROPIEDADLOSPAUROS_46_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03ESTANCIAPROPIEDADLOSPAUROS_46_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDAPROPIEDADBELLAVISTA_47 = new ol.format.GeoJSON();
var features_03HACIENDAPROPIEDADBELLAVISTA_47 = format_03HACIENDAPROPIEDADBELLAVISTA_47.readFeatures(json_03HACIENDAPROPIEDADBELLAVISTA_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDAPROPIEDADBELLAVISTA_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDAPROPIEDADBELLAVISTA_47.addFeatures(features_03HACIENDAPROPIEDADBELLAVISTA_47);
var lyr_03HACIENDAPROPIEDADBELLAVISTA_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDAPROPIEDADBELLAVISTA_47, 
                style: style_03HACIENDAPROPIEDADBELLAVISTA_47,
                popuplayertitle: '03 - HACIENDA PROPIEDAD BELLA VISTA',
                interactive: false,
    title: '03 - HACIENDA PROPIEDAD BELLA VISTA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADBELLAVISTA_47_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADBELLAVISTA_47_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDABOLIVIA_48 = new ol.format.GeoJSON();
var features_03HACIENDABOLIVIA_48 = format_03HACIENDABOLIVIA_48.readFeatures(json_03HACIENDABOLIVIA_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDABOLIVIA_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDABOLIVIA_48.addFeatures(features_03HACIENDABOLIVIA_48);
var lyr_03HACIENDABOLIVIA_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDABOLIVIA_48, 
                style: style_03HACIENDABOLIVIA_48,
                popuplayertitle: '03 - HACIENDA BOLIVIA',
                interactive: false,
    title: '03 - HACIENDA BOLIVIA<br />\
    <img src="styles/legend/03HACIENDABOLIVIA_48_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDABOLIVIA_48_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDACINCOESTRELLAS_49 = new ol.format.GeoJSON();
var features_03HACIENDACINCOESTRELLAS_49 = format_03HACIENDACINCOESTRELLAS_49.readFeatures(json_03HACIENDACINCOESTRELLAS_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDACINCOESTRELLAS_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDACINCOESTRELLAS_49.addFeatures(features_03HACIENDACINCOESTRELLAS_49);
var lyr_03HACIENDACINCOESTRELLAS_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDACINCOESTRELLAS_49, 
                style: style_03HACIENDACINCOESTRELLAS_49,
                popuplayertitle: '03 - HACIENDA CINCO ESTRELLAS',
                interactive: false,
    title: '03 - HACIENDA CINCO ESTRELLAS<br />\
    <img src="styles/legend/03HACIENDACINCOESTRELLAS_49_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDACINCOESTRELLAS_49_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50 = new ol.format.GeoJSON();
var features_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50 = format_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50.readFeatures(json_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50.addFeatures(features_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50);
var lyr_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50, 
                style: style_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50,
                popuplayertitle: '03 - HACIENDA PROPIEDAD AGRICOLA LA CACHUELA',
                interactive: false,
    title: '03 - HACIENDA PROPIEDAD AGRICOLA LA CACHUELA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADAGRICOLALACACHUELA_50_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADAGRICOLALACACHUELA_50_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDAPROPIEDADAGRICOLASUAREZ_51 = new ol.format.GeoJSON();
var features_03HACIENDAPROPIEDADAGRICOLASUAREZ_51 = format_03HACIENDAPROPIEDADAGRICOLASUAREZ_51.readFeatures(json_03HACIENDAPROPIEDADAGRICOLASUAREZ_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDAPROPIEDADAGRICOLASUAREZ_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDAPROPIEDADAGRICOLASUAREZ_51.addFeatures(features_03HACIENDAPROPIEDADAGRICOLASUAREZ_51);
var lyr_03HACIENDAPROPIEDADAGRICOLASUAREZ_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDAPROPIEDADAGRICOLASUAREZ_51, 
                style: style_03HACIENDAPROPIEDADAGRICOLASUAREZ_51,
                popuplayertitle: '03 - HACIENDA PROPIEDAD AGRICOLA SUAREZ',
                interactive: false,
    title: '03 - HACIENDA PROPIEDAD AGRICOLA SUAREZ<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADAGRICOLASUAREZ_51_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADAGRICOLASUAREZ_51_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDAPROPIEDADCAAVERALES_52 = new ol.format.GeoJSON();
var features_03HACIENDAPROPIEDADCAAVERALES_52 = format_03HACIENDAPROPIEDADCAAVERALES_52.readFeatures(json_03HACIENDAPROPIEDADCAAVERALES_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDAPROPIEDADCAAVERALES_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDAPROPIEDADCAAVERALES_52.addFeatures(features_03HACIENDAPROPIEDADCAAVERALES_52);
var lyr_03HACIENDAPROPIEDADCAAVERALES_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDAPROPIEDADCAAVERALES_52, 
                style: style_03HACIENDAPROPIEDADCAAVERALES_52,
                popuplayertitle: '03 - HACIENDA PROPIEDAD CAÑAVERALES',
                interactive: false,
    title: '03 - HACIENDA PROPIEDAD CAÑAVERALES<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADCAAVERALES_52_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADCAAVERALES_52_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDAPROPIEDADNUEVAERA_53 = new ol.format.GeoJSON();
var features_03HACIENDAPROPIEDADNUEVAERA_53 = format_03HACIENDAPROPIEDADNUEVAERA_53.readFeatures(json_03HACIENDAPROPIEDADNUEVAERA_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDAPROPIEDADNUEVAERA_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDAPROPIEDADNUEVAERA_53.addFeatures(features_03HACIENDAPROPIEDADNUEVAERA_53);
var lyr_03HACIENDAPROPIEDADNUEVAERA_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDAPROPIEDADNUEVAERA_53, 
                style: style_03HACIENDAPROPIEDADNUEVAERA_53,
                popuplayertitle: '03 - HACIENDA PROPIEDAD NUEVA ERA',
                interactive: false,
    title: '03 - HACIENDA PROPIEDAD NUEVA ERA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADNUEVAERA_53_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADNUEVAERA_53_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDAPROPIEDADPANAMAI_54 = new ol.format.GeoJSON();
var features_03HACIENDAPROPIEDADPANAMAI_54 = format_03HACIENDAPROPIEDADPANAMAI_54.readFeatures(json_03HACIENDAPROPIEDADPANAMAI_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDAPROPIEDADPANAMAI_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDAPROPIEDADPANAMAI_54.addFeatures(features_03HACIENDAPROPIEDADPANAMAI_54);
var lyr_03HACIENDAPROPIEDADPANAMAI_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDAPROPIEDADPANAMAI_54, 
                style: style_03HACIENDAPROPIEDADPANAMAI_54,
                popuplayertitle: '03 - HACIENDA PROPIEDAD PANAMA I',
                interactive: false,
    title: '03 - HACIENDA PROPIEDAD PANAMA I<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADPANAMAI_54_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADPANAMAI_54_1.png" /> AREA NO CULTIVADA<br />' });
var format_03HACIENDAPROPIEDADQUIROZ_55 = new ol.format.GeoJSON();
var features_03HACIENDAPROPIEDADQUIROZ_55 = format_03HACIENDAPROPIEDADQUIROZ_55.readFeatures(json_03HACIENDAPROPIEDADQUIROZ_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03HACIENDAPROPIEDADQUIROZ_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03HACIENDAPROPIEDADQUIROZ_55.addFeatures(features_03HACIENDAPROPIEDADQUIROZ_55);
var lyr_03HACIENDAPROPIEDADQUIROZ_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03HACIENDAPROPIEDADQUIROZ_55, 
                style: style_03HACIENDAPROPIEDADQUIROZ_55,
                popuplayertitle: '03 - HACIENDA PROPIEDAD QUIROZ',
                interactive: false,
    title: '03 - HACIENDA PROPIEDAD QUIROZ<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADQUIROZ_55_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/03HACIENDAPROPIEDADQUIROZ_55_1.png" /> AREA NO CULTIVADA<br />' });
var format_02AGUAHI_56 = new ol.format.GeoJSON();
var features_02AGUAHI_56 = format_02AGUAHI_56.readFeatures(json_02AGUAHI_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02AGUAHI_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02AGUAHI_56.addFeatures(features_02AGUAHI_56);
var lyr_02AGUAHI_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02AGUAHI_56, 
                style: style_02AGUAHI_56,
                popuplayertitle: '02 - AGUAHI',
                interactive: false,
    title: '02 - AGUAHI<br />\
    <img src="styles/legend/02AGUAHI_56_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/02AGUAHI_56_1.png" /> AREA NO CULTIVADA<br />' });
var format_02AGUAH_57 = new ol.format.GeoJSON();
var features_02AGUAH_57 = format_02AGUAH_57.readFeatures(json_02AGUAH_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02AGUAH_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02AGUAH_57.addFeatures(features_02AGUAH_57);
var lyr_02AGUAH_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02AGUAH_57, 
                style: style_02AGUAH_57,
                popuplayertitle: '02 - AGUAH',
                interactive: false,
    title: '02 - AGUAH<br />\
    <img src="styles/legend/02AGUAH_57_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/02AGUAH_57_1.png" /> AREA NO CULTIVADA<br />' });
var format_01LASPARABAS_58 = new ol.format.GeoJSON();
var features_01LASPARABAS_58 = format_01LASPARABAS_58.readFeatures(json_01LASPARABAS_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01LASPARABAS_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01LASPARABAS_58.addFeatures(features_01LASPARABAS_58);
var lyr_01LASPARABAS_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01LASPARABAS_58, 
                style: style_01LASPARABAS_58,
                popuplayertitle: '01 - LAS PARABAS',
                interactive: false,
    title: '01 - LAS PARABAS<br />\
    <img src="styles/legend/01LASPARABAS_58_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/01LASPARABAS_58_1.png" /> AREA NO CULTIVADA<br />' });
var format_01FINCAPROPIEDADANDRESZURITAPARRA_59 = new ol.format.GeoJSON();
var features_01FINCAPROPIEDADANDRESZURITAPARRA_59 = format_01FINCAPROPIEDADANDRESZURITAPARRA_59.readFeatures(json_01FINCAPROPIEDADANDRESZURITAPARRA_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01FINCAPROPIEDADANDRESZURITAPARRA_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01FINCAPROPIEDADANDRESZURITAPARRA_59.addFeatures(features_01FINCAPROPIEDADANDRESZURITAPARRA_59);
var lyr_01FINCAPROPIEDADANDRESZURITAPARRA_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01FINCAPROPIEDADANDRESZURITAPARRA_59, 
                style: style_01FINCAPROPIEDADANDRESZURITAPARRA_59,
                popuplayertitle: '01 - FINCA PROPIEDAD ANDRES ZURITA PARRA',
                interactive: false,
    title: '01 - FINCA PROPIEDAD ANDRES ZURITA PARRA<br />\
    <img src="styles/legend/01FINCAPROPIEDADANDRESZURITAPARRA_59_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/01FINCAPROPIEDADANDRESZURITAPARRA_59_1.png" /> AREA NO CULTIVADA<br />' });
var format_01HACIENDAAGRICOLASHAMAHSHEKINAH_60 = new ol.format.GeoJSON();
var features_01HACIENDAAGRICOLASHAMAHSHEKINAH_60 = format_01HACIENDAAGRICOLASHAMAHSHEKINAH_60.readFeatures(json_01HACIENDAAGRICOLASHAMAHSHEKINAH_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01HACIENDAAGRICOLASHAMAHSHEKINAH_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01HACIENDAAGRICOLASHAMAHSHEKINAH_60.addFeatures(features_01HACIENDAAGRICOLASHAMAHSHEKINAH_60);
var lyr_01HACIENDAAGRICOLASHAMAHSHEKINAH_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01HACIENDAAGRICOLASHAMAHSHEKINAH_60, 
                style: style_01HACIENDAAGRICOLASHAMAHSHEKINAH_60,
                popuplayertitle: '01 - HACIENDA AGRICOLA SHAMAH SHEKINAH',
                interactive: false,
    title: '01 - HACIENDA AGRICOLA SHAMAH SHEKINAH<br />\
    <img src="styles/legend/01HACIENDAAGRICOLASHAMAHSHEKINAH_60_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/01HACIENDAAGRICOLASHAMAHSHEKINAH_60_1.png" /> AREA NO CULTIVADA<br />' });
var format_01HACIENDAAGRICOLAYGANADERAELSEOR_61 = new ol.format.GeoJSON();
var features_01HACIENDAAGRICOLAYGANADERAELSEOR_61 = format_01HACIENDAAGRICOLAYGANADERAELSEOR_61.readFeatures(json_01HACIENDAAGRICOLAYGANADERAELSEOR_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01HACIENDAAGRICOLAYGANADERAELSEOR_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01HACIENDAAGRICOLAYGANADERAELSEOR_61.addFeatures(features_01HACIENDAAGRICOLAYGANADERAELSEOR_61);
var lyr_01HACIENDAAGRICOLAYGANADERAELSEOR_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01HACIENDAAGRICOLAYGANADERAELSEOR_61, 
                style: style_01HACIENDAAGRICOLAYGANADERAELSEOR_61,
                popuplayertitle: '01 - HACIENDA AGRICOLA Y GANADERA EL SEÑOR',
                interactive: false,
    title: '01 - HACIENDA AGRICOLA Y GANADERA EL SEÑOR<br />\
    <img src="styles/legend/01HACIENDAAGRICOLAYGANADERAELSEOR_61_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/01HACIENDAAGRICOLAYGANADERAELSEOR_61_1.png" /> AREA NO CULTIVADA<br />' });
var format_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62 = new ol.format.GeoJSON();
var features_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62 = format_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62.readFeatures(json_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62.addFeatures(features_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62);
var lyr_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62, 
                style: style_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62,
                popuplayertitle: '01 - HACIENDA PROPIEDAD CAMPAMENTO AGRICOLA GRANORTE',
                interactive: false,
    title: '01 - HACIENDA PROPIEDAD CAMPAMENTO AGRICOLA GRANORTE<br />\
    <img src="styles/legend/01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62_1.png" /> AREA NO CULTIVADA<br />' });
var format_01HACIENDAPROPIEDADJULIAN_63 = new ol.format.GeoJSON();
var features_01HACIENDAPROPIEDADJULIAN_63 = format_01HACIENDAPROPIEDADJULIAN_63.readFeatures(json_01HACIENDAPROPIEDADJULIAN_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01HACIENDAPROPIEDADJULIAN_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01HACIENDAPROPIEDADJULIAN_63.addFeatures(features_01HACIENDAPROPIEDADJULIAN_63);
var lyr_01HACIENDAPROPIEDADJULIAN_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01HACIENDAPROPIEDADJULIAN_63, 
                style: style_01HACIENDAPROPIEDADJULIAN_63,
                popuplayertitle: '01 - HACIENDA PROPIEDAD JULIAN',
                interactive: false,
    title: '01 - HACIENDA PROPIEDAD JULIAN<br />\
    <img src="styles/legend/01HACIENDAPROPIEDADJULIAN_63_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/01HACIENDAPROPIEDADJULIAN_63_1.png" /> AREA NO CULTIVADA<br />' });
var format_01HACIENDAPROPIEDADTORRICO_64 = new ol.format.GeoJSON();
var features_01HACIENDAPROPIEDADTORRICO_64 = format_01HACIENDAPROPIEDADTORRICO_64.readFeatures(json_01HACIENDAPROPIEDADTORRICO_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01HACIENDAPROPIEDADTORRICO_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01HACIENDAPROPIEDADTORRICO_64.addFeatures(features_01HACIENDAPROPIEDADTORRICO_64);
var lyr_01HACIENDAPROPIEDADTORRICO_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01HACIENDAPROPIEDADTORRICO_64, 
                style: style_01HACIENDAPROPIEDADTORRICO_64,
                popuplayertitle: '01 - HACIENDA PROPIEDAD TORRICO',
                interactive: false,
    title: '01 - HACIENDA PROPIEDAD TORRICO<br />\
    <img src="styles/legend/01HACIENDAPROPIEDADTORRICO_64_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/01HACIENDAPROPIEDADTORRICO_64_1.png" /> AREA NO CULTIVADA<br />' });
var format_CENTROSPOBLADOS_65 = new ol.format.GeoJSON();
var features_CENTROSPOBLADOS_65 = format_CENTROSPOBLADOS_65.readFeatures(json_CENTROSPOBLADOS_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSPOBLADOS_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSPOBLADOS_65.addFeatures(features_CENTROSPOBLADOS_65);
var lyr_CENTROSPOBLADOS_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSPOBLADOS_65, 
                style: style_CENTROSPOBLADOS_65,
                popuplayertitle: 'CENTROS POBLADOS',
                interactive: false,
                title: '<img src="styles/legend/CENTROSPOBLADOS_65.png" /> CENTROS POBLADOS'
            });
var format_LIMITECOMUNIDADES_66 = new ol.format.GeoJSON();
var features_LIMITECOMUNIDADES_66 = format_LIMITECOMUNIDADES_66.readFeatures(json_LIMITECOMUNIDADES_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITECOMUNIDADES_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITECOMUNIDADES_66.addFeatures(features_LIMITECOMUNIDADES_66);
var lyr_LIMITECOMUNIDADES_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITECOMUNIDADES_66, 
                style: style_LIMITECOMUNIDADES_66,
                popuplayertitle: 'LIMITE COMUNIDADES ',
                interactive: false,
                title: '<img src="styles/legend/LIMITECOMUNIDADES_66.png" /> LIMITE COMUNIDADES '
            });
var format_REASENUMERADAS_67 = new ol.format.GeoJSON();
var features_REASENUMERADAS_67 = format_REASENUMERADAS_67.readFeatures(json_REASENUMERADAS_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REASENUMERADAS_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REASENUMERADAS_67.addFeatures(features_REASENUMERADAS_67);
var lyr_REASENUMERADAS_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REASENUMERADAS_67, 
                style: style_REASENUMERADAS_67,
                popuplayertitle: 'ÁREAS ENUMERADAS',
                interactive: false,
                title: '<img src="styles/legend/REASENUMERADAS_67.png" /> ÁREAS ENUMERADAS'
            });
var format_REASAGROPECUARIAS_68 = new ol.format.GeoJSON();
var features_REASAGROPECUARIAS_68 = format_REASAGROPECUARIAS_68.readFeatures(json_REASAGROPECUARIAS_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REASAGROPECUARIAS_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REASAGROPECUARIAS_68.addFeatures(features_REASAGROPECUARIAS_68);
var lyr_REASAGROPECUARIAS_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REASAGROPECUARIAS_68, 
                style: style_REASAGROPECUARIAS_68,
                popuplayertitle: 'ÁREAS AGROPECUARIAS',
                interactive: false,
                title: '<img src="styles/legend/REASAGROPECUARIAS_68.png" /> ÁREAS AGROPECUARIAS'
            });
var group_AE01 = new ol.layer.Group({
                                layers: [lyr_01LASPARABAS_58,lyr_01FINCAPROPIEDADANDRESZURITAPARRA_59,lyr_01HACIENDAAGRICOLASHAMAHSHEKINAH_60,lyr_01HACIENDAAGRICOLAYGANADERAELSEOR_61,lyr_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62,lyr_01HACIENDAPROPIEDADJULIAN_63,lyr_01HACIENDAPROPIEDADTORRICO_64,],
                                fold: 'close',
                                title: 'AE - 01'});
var group_AE02 = new ol.layer.Group({
                                layers: [lyr_02AGUAHI_56,lyr_02AGUAH_57,],
                                fold: 'close',
                                title: 'AE - 02'});
var group_AE03 = new ol.layer.Group({
                                layers: [lyr_03HACIENDAPROPIEDADVILLANUEVAI_41,lyr_03HACIENDAPROPIEDADYUPANQUI_42,lyr_03HACIENDA_43,lyr_03PROPIEDADSANMARTIN_44,lyr_03CACHUELAESPERANZA_45,lyr_03ESTANCIAPROPIEDADLOSPAUROS_46,lyr_03HACIENDAPROPIEDADBELLAVISTA_47,lyr_03HACIENDABOLIVIA_48,lyr_03HACIENDACINCOESTRELLAS_49,lyr_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50,lyr_03HACIENDAPROPIEDADAGRICOLASUAREZ_51,lyr_03HACIENDAPROPIEDADCAAVERALES_52,lyr_03HACIENDAPROPIEDADNUEVAERA_53,lyr_03HACIENDAPROPIEDADPANAMAI_54,lyr_03HACIENDAPROPIEDADQUIROZ_55,],
                                fold: 'close',
                                title: 'AE - 03'});
var group_AE04 = new ol.layer.Group({
                                layers: [lyr_04MONTERICO_33,lyr_04TOBOROCHI_34,lyr_04HACIENDAJISUNU_35,lyr_04HACIENDAPROPIEDADAGROSUAREZ_36,lyr_04HACIENDAPROPIEDADLABALANZA_37,lyr_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38,lyr_04HACIENDAPROPIEDADSANSIMON_39,lyr_04HACIENDAPROPIEDADSUIZARIOGRANDE_40,],
                                fold: 'close',
                                title: 'AE - 04'});
var group_AE06 = new ol.layer.Group({
                                layers: [lyr_06SANLORENZO_29,lyr_06SANMARCOS_30,lyr_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31,],
                                fold: 'close',
                                title: 'AE - 06'});
var group_AE07 = new ol.layer.Group({
                                layers: [lyr_07ESTANCIAPROPIEDADJUANPADILLA_23,lyr_07FAJA9DEABRIL_24,lyr_07HACIENDAPROPIEDADLAREPRESA_25,lyr_07HACIENDAPROPIEDADLOSMUECOS_26,lyr_07HACIENDAPROPIEDADSANMARCO_27,lyr_07HACIENDAPROPIEDADVILLAFATIMA_28,],
                                fold: 'close',
                                title: 'AE - 07'});
var group_AE10 = new ol.layer.Group({
                                layers: [lyr_10ELBAJIAL_18,lyr_10FAJAPORTONCOTAGAITA_19,lyr_10HACIENDAPROPIEDADSANJORGE_20,],
                                fold: 'close',
                                title: 'AE - 10'});
var group_AE11 = new ol.layer.Group({
                                layers: [lyr_11FAJAKUMALI_16,lyr_11FAJAROCABADO_17,],
                                fold: 'close',
                                title: 'AE - 11'});
var group_AE12 = new ol.layer.Group({
                                layers: [lyr_12FAJACHOROLQUE_14,lyr_12FAJACOTOCA_15,],
                                fold: 'close',
                                title: 'AE - 12'});
var group_AE13 = new ol.layer.Group({
                                layers: [lyr_13PORTON_10,lyr_13HACIENDAGRANJABASILIOELGRANDE_11,lyr_13HACIENDAPROPIEDADCAMPOGRANDE_12,lyr_13HACIENDAPROPIEDADVICTORPAZ_13,],
                                fold: 'close',
                                title: 'AE - 13'});
var group_AE14 = new ol.layer.Group({
                                layers: [lyr_14VILLAPROGRESO_8,lyr_14ESTRELLAHORIZONTE_9,],
                                fold: 'close',
                                title: 'AE - 14'});
var group_CENTROSPOBLADOS = new ol.layer.Group({
                                layers: [lyr_CPLASPARABAS_1,lyr_CPTUNARI_2,lyr_CPBETANIA_3,lyr_CPFERNANDEZALONSO_4,lyr_CPCOMUNIDADRUSATOBOROCHI_5,lyr_CPCHANEINDEPENDENCIA_6,],
                                fold: 'close',
                                title: 'CENTROS POBLADOS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_CPLASPARABAS_1.setVisible(true);lyr_CPTUNARI_2.setVisible(true);lyr_CPBETANIA_3.setVisible(true);lyr_CPFERNANDEZALONSO_4.setVisible(true);lyr_CPCOMUNIDADRUSATOBOROCHI_5.setVisible(true);lyr_CPCHANEINDEPENDENCIA_6.setVisible(true);lyr_AE15AE16FLORDELVALLE_7.setVisible(true);lyr_14VILLAPROGRESO_8.setVisible(true);lyr_14ESTRELLAHORIZONTE_9.setVisible(true);lyr_13PORTON_10.setVisible(true);lyr_13HACIENDAGRANJABASILIOELGRANDE_11.setVisible(true);lyr_13HACIENDAPROPIEDADCAMPOGRANDE_12.setVisible(true);lyr_13HACIENDAPROPIEDADVICTORPAZ_13.setVisible(true);lyr_12FAJACHOROLQUE_14.setVisible(true);lyr_12FAJACOTOCA_15.setVisible(true);lyr_11FAJAKUMALI_16.setVisible(true);lyr_11FAJAROCABADO_17.setVisible(true);lyr_10ELBAJIAL_18.setVisible(true);lyr_10FAJAPORTONCOTAGAITA_19.setVisible(true);lyr_10HACIENDAPROPIEDADSANJORGE_20.setVisible(true);lyr_AE09MOTACUSAL_21.setVisible(true);lyr_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22.setVisible(true);lyr_07ESTANCIAPROPIEDADJUANPADILLA_23.setVisible(true);lyr_07FAJA9DEABRIL_24.setVisible(true);lyr_07HACIENDAPROPIEDADLAREPRESA_25.setVisible(true);lyr_07HACIENDAPROPIEDADLOSMUECOS_26.setVisible(true);lyr_07HACIENDAPROPIEDADSANMARCO_27.setVisible(true);lyr_07HACIENDAPROPIEDADVILLAFATIMA_28.setVisible(true);lyr_06SANLORENZO_29.setVisible(true);lyr_06SANMARCOS_30.setVisible(true);lyr_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31.setVisible(true);lyr_AE055DEMARZO_32.setVisible(true);lyr_04MONTERICO_33.setVisible(true);lyr_04TOBOROCHI_34.setVisible(true);lyr_04HACIENDAJISUNU_35.setVisible(true);lyr_04HACIENDAPROPIEDADAGROSUAREZ_36.setVisible(true);lyr_04HACIENDAPROPIEDADLABALANZA_37.setVisible(true);lyr_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38.setVisible(true);lyr_04HACIENDAPROPIEDADSANSIMON_39.setVisible(true);lyr_04HACIENDAPROPIEDADSUIZARIOGRANDE_40.setVisible(true);lyr_03HACIENDAPROPIEDADVILLANUEVAI_41.setVisible(true);lyr_03HACIENDAPROPIEDADYUPANQUI_42.setVisible(true);lyr_03HACIENDA_43.setVisible(true);lyr_03PROPIEDADSANMARTIN_44.setVisible(true);lyr_03CACHUELAESPERANZA_45.setVisible(true);lyr_03ESTANCIAPROPIEDADLOSPAUROS_46.setVisible(true);lyr_03HACIENDAPROPIEDADBELLAVISTA_47.setVisible(true);lyr_03HACIENDABOLIVIA_48.setVisible(true);lyr_03HACIENDACINCOESTRELLAS_49.setVisible(true);lyr_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50.setVisible(true);lyr_03HACIENDAPROPIEDADAGRICOLASUAREZ_51.setVisible(true);lyr_03HACIENDAPROPIEDADCAAVERALES_52.setVisible(true);lyr_03HACIENDAPROPIEDADNUEVAERA_53.setVisible(true);lyr_03HACIENDAPROPIEDADPANAMAI_54.setVisible(true);lyr_03HACIENDAPROPIEDADQUIROZ_55.setVisible(true);lyr_02AGUAHI_56.setVisible(true);lyr_02AGUAH_57.setVisible(true);lyr_01LASPARABAS_58.setVisible(true);lyr_01FINCAPROPIEDADANDRESZURITAPARRA_59.setVisible(true);lyr_01HACIENDAAGRICOLASHAMAHSHEKINAH_60.setVisible(true);lyr_01HACIENDAAGRICOLAYGANADERAELSEOR_61.setVisible(true);lyr_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62.setVisible(true);lyr_01HACIENDAPROPIEDADJULIAN_63.setVisible(true);lyr_01HACIENDAPROPIEDADTORRICO_64.setVisible(true);lyr_CENTROSPOBLADOS_65.setVisible(true);lyr_LIMITECOMUNIDADES_66.setVisible(true);lyr_REASENUMERADAS_67.setVisible(true);lyr_REASAGROPECUARIAS_68.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_CENTROSPOBLADOS,lyr_AE15AE16FLORDELVALLE_7,group_AE14,group_AE13,group_AE12,group_AE11,group_AE10,lyr_AE09MOTACUSAL_21,lyr_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22,group_AE07,group_AE06,lyr_AE055DEMARZO_32,group_AE04,group_AE03,group_AE02,group_AE01,lyr_CENTROSPOBLADOS_65,lyr_LIMITECOMUNIDADES_66,lyr_REASENUMERADAS_67,lyr_REASAGROPECUARIAS_68];
lyr_CPLASPARABAS_1.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_CPTUNARI_2.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_CPBETANIA_3.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_CPFERNANDEZALONSO_4.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_CPCOMUNIDADRUSATOBOROCHI_5.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_CPCHANEINDEPENDENCIA_6.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_AE15AE16FLORDELVALLE_7.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_14VILLAPROGRESO_8.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_14ESTRELLAHORIZONTE_9.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_13PORTON_10.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_13HACIENDAGRANJABASILIOELGRANDE_11.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_13HACIENDAPROPIEDADCAMPOGRANDE_12.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_13HACIENDAPROPIEDADVICTORPAZ_13.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_12FAJACHOROLQUE_14.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_12FAJACOTOCA_15.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_11FAJAKUMALI_16.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_11FAJAROCABADO_17.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_10ELBAJIAL_18.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_10FAJAPORTONCOTAGAITA_19.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_10HACIENDAPROPIEDADSANJORGE_20.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_AE09MOTACUSAL_21.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_07ESTANCIAPROPIEDADJUANPADILLA_23.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_07FAJA9DEABRIL_24.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_07HACIENDAPROPIEDADLAREPRESA_25.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_07HACIENDAPROPIEDADLOSMUECOS_26.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_07HACIENDAPROPIEDADSANMARCO_27.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_07HACIENDAPROPIEDADVILLAFATIMA_28.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_06SANLORENZO_29.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_06SANMARCOS_30.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_AE055DEMARZO_32.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_04MONTERICO_33.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_04TOBOROCHI_34.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_04HACIENDAJISUNU_35.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_04HACIENDAPROPIEDADAGROSUAREZ_36.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_04HACIENDAPROPIEDADLABALANZA_37.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_04HACIENDAPROPIEDADSANSIMON_39.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_04HACIENDAPROPIEDADSUIZARIOGRANDE_40.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDAPROPIEDADVILLANUEVAI_41.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDAPROPIEDADYUPANQUI_42.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDA_43.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03PROPIEDADSANMARTIN_44.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03CACHUELAESPERANZA_45.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03ESTANCIAPROPIEDADLOSPAUROS_46.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDAPROPIEDADBELLAVISTA_47.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDABOLIVIA_48.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDACINCOESTRELLAS_49.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDAPROPIEDADAGRICOLASUAREZ_51.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDAPROPIEDADCAAVERALES_52.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDAPROPIEDADNUEVAERA_53.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDAPROPIEDADPANAMAI_54.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_03HACIENDAPROPIEDADQUIROZ_55.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_02AGUAHI_56.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_02AGUAH_57.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_01LASPARABAS_58.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_01FINCAPROPIEDADANDRESZURITAPARRA_59.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_01HACIENDAAGRICOLASHAMAHSHEKINAH_60.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_01HACIENDAAGRICOLAYGANADERAELSEOR_61.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_01HACIENDAPROPIEDADJULIAN_63.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_01HACIENDAPROPIEDADTORRICO_64.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_CENTROSPOBLADOS_65.set('fieldAliases', {'id': 'id', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'area_cpv': 'area_cpv', 'con_area': 'con_area', 'tipo_area': 'tipo_area', 'extension': 'extension', 'tipo': 'tipo', 'con_peri': 'con_peri', 'usr_act': 'usr_act', 'estado1': 'estado1', 'usr_rev': 'usr_rev', 'estado2': 'estado2', 'estado3': 'estado3', 'areacpv_pl': 'areacpv_pl', 'a_cpv': 'a_cpv', 'a_zona': 'a_zona', 'a_sector': 'a_sector', 'a_segmento': 'a_segmento', 'areacensal': 'areacensal', 'geom_key': 'geom_key', 'id_f1': 'id_f1', 'id_f2oc': 'id_f2oc', 'total_pob': 'total_pob', 'total_pob2': 'total_pob2', 'tipo_ciuda': 'tipo_ciuda', });
lyr_LIMITECOMUNIDADES_66.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'id_ciu_com': 'id_ciu_com', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'upa_13': 'upa_13', 'sup13ha': 'sup13ha', 'n_pre_ace': 'n_pre_ace', 'id_com_cpv': 'id_com_cpv', 'id_com_cna': 'id_com_cna', 'id_com_ace': 'id_com_ace', 'reg_censos': 'reg_censos', 'id_com_ca': 'id_com_ca', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'tot_pob_ac': 'tot_pob_ac', 'tot_pob_12': 'tot_pob_12', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'd_co_comk': 'd_co_comk', 'observ': 'observ', 'codigompio': 'codigompio', });
lyr_REASENUMERADAS_67.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'upa_13_ae': 'upa_13_ae', 'sup13ha_ae': 'sup13ha_ae', 'pre_ace_ae': 'pre_ace_ae', 'n_aba_ae': 'n_aba_ae', 'n_com_ae': 'n_com_ae', 'n_est_ae': 'n_est_ae', 'n_tco_ae': 'n_tco_ae', 'viv_12_ae': 'viv_12_ae', 'viv_ac_ae': 'viv_ac_ae', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'observ': 'observ', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'n_cuest': 'n_cuest', 'n_empadro': 'n_empadro', 'codigompio': 'codigompio', });
lyr_REASAGROPECUARIAS_68.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'upa_13_ag': 'upa_13_ag', 'sup13ha_ag': 'sup13ha_ag', 'pre_ace_ag': 'pre_ace_ag', 'viv_12_ag': 'viv_12_ag', 'viv_ace_ag': 'viv_ace_ag', 'n_aba_ag': 'n_aba_ag', 'n_com_ag': 'n_com_ag', 'n_est_ag': 'n_est_ag', 'n_tco_ag': 'n_tco_ag', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'observ': 'observ', 'upa_fin': 'upa_fin', 'c_op': 'c_op', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'codigompio': 'codigompio', });
lyr_CPLASPARABAS_1.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CPTUNARI_2.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CPBETANIA_3.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CPFERNANDEZALONSO_4.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CPCOMUNIDADRUSATOBOROCHI_5.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CPCHANEINDEPENDENCIA_6.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AE15AE16FLORDELVALLE_7.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_14VILLAPROGRESO_8.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_14ESTRELLAHORIZONTE_9.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_13PORTON_10.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_13HACIENDAGRANJABASILIOELGRANDE_11.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_13HACIENDAPROPIEDADCAMPOGRANDE_12.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_13HACIENDAPROPIEDADVICTORPAZ_13.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_12FAJACHOROLQUE_14.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_12FAJACOTOCA_15.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_11FAJAKUMALI_16.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_11FAJAROCABADO_17.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_10ELBAJIAL_18.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_10FAJAPORTONCOTAGAITA_19.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_10HACIENDAPROPIEDADSANJORGE_20.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AE09MOTACUSAL_21.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_07ESTANCIAPROPIEDADJUANPADILLA_23.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_07FAJA9DEABRIL_24.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_07HACIENDAPROPIEDADLAREPRESA_25.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_07HACIENDAPROPIEDADLOSMUECOS_26.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_07HACIENDAPROPIEDADSANMARCO_27.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_07HACIENDAPROPIEDADVILLAFATIMA_28.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_06SANLORENZO_29.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_06SANMARCOS_30.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AE055DEMARZO_32.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_04MONTERICO_33.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_04TOBOROCHI_34.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_04HACIENDAJISUNU_35.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_04HACIENDAPROPIEDADAGROSUAREZ_36.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_04HACIENDAPROPIEDADLABALANZA_37.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_04HACIENDAPROPIEDADSANSIMON_39.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_04HACIENDAPROPIEDADSUIZARIOGRANDE_40.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDAPROPIEDADVILLANUEVAI_41.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDAPROPIEDADYUPANQUI_42.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDA_43.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03PROPIEDADSANMARTIN_44.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03CACHUELAESPERANZA_45.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03ESTANCIAPROPIEDADLOSPAUROS_46.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDAPROPIEDADBELLAVISTA_47.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDABOLIVIA_48.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDACINCOESTRELLAS_49.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDAPROPIEDADAGRICOLASUAREZ_51.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDAPROPIEDADCAAVERALES_52.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDAPROPIEDADNUEVAERA_53.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDAPROPIEDADPANAMAI_54.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_03HACIENDAPROPIEDADQUIROZ_55.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_02AGUAHI_56.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_02AGUAH_57.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_01LASPARABAS_58.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_01FINCAPROPIEDADANDRESZURITAPARRA_59.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_01HACIENDAAGRICOLASHAMAHSHEKINAH_60.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_01HACIENDAAGRICOLAYGANADERAELSEOR_61.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_01HACIENDAPROPIEDADJULIAN_63.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_01HACIENDAPROPIEDADTORRICO_64.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CENTROSPOBLADOS_65.set('fieldImages', {'id': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'area_cpv': 'TextEdit', 'con_area': 'TextEdit', 'tipo_area': 'TextEdit', 'extension': 'TextEdit', 'tipo': 'TextEdit', 'con_peri': 'TextEdit', 'usr_act': 'TextEdit', 'estado1': 'TextEdit', 'usr_rev': 'TextEdit', 'estado2': 'TextEdit', 'estado3': 'TextEdit', 'areacpv_pl': 'TextEdit', 'a_cpv': 'TextEdit', 'a_zona': 'TextEdit', 'a_sector': 'TextEdit', 'a_segmento': 'TextEdit', 'areacensal': 'TextEdit', 'geom_key': 'TextEdit', 'id_f1': 'TextEdit', 'id_f2oc': 'TextEdit', 'total_pob': 'TextEdit', 'total_pob2': 'TextEdit', 'tipo_ciuda': 'TextEdit', });
lyr_LIMITECOMUNIDADES_66.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'id_ciu_com': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'upa_13': 'TextEdit', 'sup13ha': 'TextEdit', 'n_pre_ace': 'TextEdit', 'id_com_cpv': 'TextEdit', 'id_com_cna': 'TextEdit', 'id_com_ace': 'TextEdit', 'reg_censos': 'TextEdit', 'id_com_ca': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'tot_pob_ac': 'TextEdit', 'tot_pob_12': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'd_co_comk': 'TextEdit', 'observ': 'TextEdit', 'codigompio': 'TextEdit', });
lyr_REASENUMERADAS_67.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'upa_13_ae': 'TextEdit', 'sup13ha_ae': 'TextEdit', 'pre_ace_ae': 'TextEdit', 'n_aba_ae': 'TextEdit', 'n_com_ae': 'TextEdit', 'n_est_ae': 'TextEdit', 'n_tco_ae': 'TextEdit', 'viv_12_ae': 'TextEdit', 'viv_ac_ae': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'observ': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'n_cuest': 'TextEdit', 'n_empadro': 'TextEdit', 'codigompio': 'TextEdit', });
lyr_REASAGROPECUARIAS_68.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'upa_13_ag': 'TextEdit', 'sup13ha_ag': 'TextEdit', 'pre_ace_ag': 'TextEdit', 'viv_12_ag': 'TextEdit', 'viv_ace_ag': 'TextEdit', 'n_aba_ag': 'TextEdit', 'n_com_ag': 'TextEdit', 'n_est_ag': 'TextEdit', 'n_tco_ag': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'observ': 'TextEdit', 'upa_fin': 'TextEdit', 'c_op': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'codigompio': 'TextEdit', });
lyr_CPLASPARABAS_1.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CPTUNARI_2.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CPBETANIA_3.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CPFERNANDEZALONSO_4.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CPCOMUNIDADRUSATOBOROCHI_5.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CPCHANEINDEPENDENCIA_6.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AE15AE16FLORDELVALLE_7.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_14VILLAPROGRESO_8.set('fieldLabels', {'cod_clas': 'header label - visible with data', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_14ESTRELLAHORIZONTE_9.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'header label - visible with data', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_13PORTON_10.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_13HACIENDAGRANJABASILIOELGRANDE_11.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_13HACIENDAPROPIEDADCAMPOGRANDE_12.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_13HACIENDAPROPIEDADVICTORPAZ_13.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_12FAJACHOROLQUE_14.set('fieldLabels', {'cod_clas': 'header label - visible with data', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_12FAJACOTOCA_15.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_11FAJAKUMALI_16.set('fieldLabels', {'cod_clas': 'header label - visible with data', 'NO SUPER': 'inline label - always visible', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_11FAJAROCABADO_17.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'inline label - always visible', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_10ELBAJIAL_18.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_10FAJAPORTONCOTAGAITA_19.set('fieldLabels', {'cod_clas': 'header label - always visible', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_10HACIENDAPROPIEDADSANJORGE_20.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'hidden field', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AE09MOTACUSAL_21.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AE8AE09SINDICATOAGRARIOCHANEMAGALLANES_22.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_07ESTANCIAPROPIEDADJUANPADILLA_23.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_07FAJA9DEABRIL_24.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_07HACIENDAPROPIEDADLAREPRESA_25.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_07HACIENDAPROPIEDADLOSMUECOS_26.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_07HACIENDAPROPIEDADSANMARCO_27.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_07HACIENDAPROPIEDADVILLAFATIMA_28.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_06SANLORENZO_29.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_06SANMARCOS_30.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_06HACIENDAPROPIEDADSANJORGEAGRIPAC_31.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AE055DEMARZO_32.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_04MONTERICO_33.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_04TOBOROCHI_34.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_04HACIENDAJISUNU_35.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_04HACIENDAPROPIEDADAGROSUAREZ_36.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_04HACIENDAPROPIEDADLABALANZA_37.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_04HACIENDAPROPIEDADRUSACACHUELAESPERANZA_38.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_04HACIENDAPROPIEDADSANSIMON_39.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_04HACIENDAPROPIEDADSUIZARIOGRANDE_40.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDAPROPIEDADVILLANUEVAI_41.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDAPROPIEDADYUPANQUI_42.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDA_43.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03PROPIEDADSANMARTIN_44.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'inline label - always visible', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03CACHUELAESPERANZA_45.set('fieldLabels', {'cod_clas': 'header label - always visible', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03ESTANCIAPROPIEDADLOSPAUROS_46.set('fieldLabels', {'cod_clas': 'header label - visible with data', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDAPROPIEDADBELLAVISTA_47.set('fieldLabels', {'cod_clas': 'header label - visible with data', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDABOLIVIA_48.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'hidden field', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDACINCOESTRELLAS_49.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'inline label - visible with data', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDAPROPIEDADAGRICOLALACACHUELA_50.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'inline label - always visible', 'cod_area': 'hidden field', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDAPROPIEDADAGRICOLASUAREZ_51.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'inline label - always visible', 'cod_area': 'inline label - visible with data', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDAPROPIEDADCAAVERALES_52.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'header label - visible with data', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDAPROPIEDADNUEVAERA_53.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'header label - visible with data', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDAPROPIEDADPANAMAI_54.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'header label - visible with data', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_03HACIENDAPROPIEDADQUIROZ_55.set('fieldLabels', {'cod_clas': 'header label - visible with data', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_02AGUAHI_56.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'inline label - always visible', 'cod_area': 'hidden field', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_02AGUAH_57.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'header label - always visible', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_01LASPARABAS_58.set('fieldLabels', {'cod_clas': 'inline label - always visible', 'NO SUPER': 'hidden field', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_01FINCAPROPIEDADANDRESZURITAPARRA_59.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_01HACIENDAAGRICOLASHAMAHSHEKINAH_60.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_01HACIENDAAGRICOLAYGANADERAELSEOR_61.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_01HACIENDAPROPIEDADCAMPAMENTOAGRICOLAGRANORTE_62.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_01HACIENDAPROPIEDADJULIAN_63.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_01HACIENDAPROPIEDADTORRICO_64.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CENTROSPOBLADOS_65.set('fieldLabels', {'id': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'area_cpv': 'no label', 'con_area': 'no label', 'tipo_area': 'no label', 'extension': 'no label', 'tipo': 'no label', 'con_peri': 'no label', 'usr_act': 'no label', 'estado1': 'no label', 'usr_rev': 'no label', 'estado2': 'no label', 'estado3': 'no label', 'areacpv_pl': 'no label', 'a_cpv': 'no label', 'a_zona': 'no label', 'a_sector': 'no label', 'a_segmento': 'no label', 'areacensal': 'no label', 'geom_key': 'no label', 'id_f1': 'no label', 'id_f2oc': 'no label', 'total_pob': 'no label', 'total_pob2': 'no label', 'tipo_ciuda': 'no label', });
lyr_LIMITECOMUNIDADES_66.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'id_ciu_com': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'upa_13': 'no label', 'sup13ha': 'no label', 'n_pre_ace': 'no label', 'id_com_cpv': 'no label', 'id_com_cna': 'no label', 'id_com_ace': 'no label', 'reg_censos': 'no label', 'id_com_ca': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'tot_pob_ac': 'no label', 'tot_pob_12': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'd_co_comk': 'no label', 'observ': 'no label', 'codigompio': 'no label', });
lyr_REASENUMERADAS_67.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'upa_13_ae': 'no label', 'sup13ha_ae': 'no label', 'pre_ace_ae': 'no label', 'n_aba_ae': 'no label', 'n_com_ae': 'no label', 'n_est_ae': 'no label', 'n_tco_ae': 'no label', 'viv_12_ae': 'no label', 'viv_ac_ae': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'observ': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'n_cuest': 'no label', 'n_empadro': 'no label', 'codigompio': 'no label', });
lyr_REASAGROPECUARIAS_68.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'upa_13_ag': 'no label', 'sup13ha_ag': 'no label', 'pre_ace_ag': 'no label', 'viv_12_ag': 'no label', 'viv_ace_ag': 'no label', 'n_aba_ag': 'no label', 'n_com_ag': 'no label', 'n_est_ag': 'no label', 'n_tco_ag': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'observ': 'no label', 'upa_fin': 'no label', 'c_op': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'codigompio': 'no label', });
lyr_REASAGROPECUARIAS_68.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});