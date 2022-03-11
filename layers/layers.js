var wms_layers = [];

var lyr_quadra_3_4_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "quadra_3_4",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/quadra_3_4_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5212761.666900, -2476878.615500, -5212666.137500, -2476827.383700]
                            })
                        });
var format_PROP_1 = new ol.format.GeoJSON();
var features_PROP_1 = format_PROP_1.readFeatures(json_PROP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROP_1.addFeatures(features_PROP_1);
var lyr_PROP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROP_1, 
                style: style_PROP_1,
                interactive: true,
                title: 'PROP'
            });

lyr_quadra_3_4_0.setVisible(true);lyr_PROP_1.setVisible(true);
var layersList = [lyr_quadra_3_4_0,lyr_PROP_1];
lyr_PROP_1.set('fieldAliases', {'Número': 'NÚMERO', 'Setor': 'QUADRA', 'PROPRIETÁ': 'PROPRIETÁRIO', 'CELULAR': 'CELULAR', 'ENDEREÇO': 'ENDEREÇO', 'FALECIDOS': 'FALECIDO', 'DATA': 'DATA', 'FOTO': 'FOTO', });
lyr_PROP_1.set('fieldImages', {'Número': 'TextEdit', 'Setor': 'TextEdit', 'PROPRIETÁ': 'TextEdit', 'CELULAR': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'FALECIDOS': 'TextEdit', 'DATA': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_PROP_1.set('fieldLabels', {'Número': 'inline label', 'Setor': 'inline label', 'PROPRIETÁ': 'inline label', 'CELULAR': 'inline label', 'ENDEREÇO': 'inline label', 'FALECIDOS': 'inline label', 'DATA': 'inline label', 'FOTO': 'no label', });
lyr_PROP_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});