

                        // supermarketBuffers.push({
                        //     feature: feature,
                        //     layer: layer,
                        //     buffer: buffer,
                        //     bufferLayer: bufferLayer
                        // });
                        // layer.addTo(mymap); 

                                        // const supermarketLayer = L.geoJson(supermarket, {
                //     onEachFeature: function (feature, layer) {
                //         layer.bindPopup(feature.properties.name);

                //         const buffer = turf.buffer(feature, 1, {units: 'kilometers'});
                //         const bufferLayer = L.geoJSON(buffer, {
                //             style:{
                //                 color:'orange', 
                //                 dashArray:'10', 
                //                 fillOpacity:0.3
                //             }
                //         });

                //         feature.layer = layer;
                //         feature.bufferLayer = bufferLayer;
                //     }
                    
                // });

                                // supermarketLayer.eachLayer(function(supermarket) {
                //     let overlaps = false;
                //     supermarketLayer.eachLayer(function(otherSupermarket) {
                //         if (supermarket !== otherSupermarket && turf.intersect(supermarket.toGeoJSON(), otherSupermarket.toGeoJSON())) {
                //             overlaps = true;
                //         }
                //     });
                //     if (!overlaps) {
                //         supermarket.feature.bufferLayer.setStyle({
                //             color: 'purple',
                //             fillColor: 'purple',
                //             fillOpacity: 0.3
                //         });
                //         supermarket.bindPopup(supermarket.feature.properties.name + " - Not overlapping");
                //     }
                // });

                // supermarketBuffers.forEach((supermarket, index) => {
                //     let overlaps = false;
                //     supermarketBuffers.forEach((otherSupermarket, otherIndex) => {
                //         if (index !== otherIndex && turf.intersect(supermarket.buffer, otherSupermarket.buffer)) {
                //             overlaps = true;
                //         }   
                //     });

                //     if (!overlaps) {
                //         supermarket.bufferLayer.setStyle({
                //             color: 'purple',
                //             fillColor: 'purple',
                //             fillOpacity: 0.3
                //         });
                //         supermarket.layer.bindPopup(supermarket.feature.properties.name + " - Not overlapping"); 
                //     }   
                // });

                                        // supermarketLayer.eachLayer(function(layer) {
                        //     if (mymap.hasLayer(layer.feature.bufferLayer)) {
                        //         mymap.removeLayer(layer.feature.bufferLayer);
                        //         mymap.removeLayer(layer.feature.bufferLayer.supermarketBuffers);
                        //     }
                        // });

                                        // VIJAYS SWEDEN LAYER

                // document.getElementById("l1").addEventListener("click", sweden);

                // function sweden(){
                //     if(mymap.hasLayer(swedishlayer)){
                //         mymap.removeLayer(swedishlayer);
                        
                //         sidebar.hide();
                        
                //     } else {
                //         swedishlayer.addTo(mymap);
                        
                //         sidebar.show();
                //     }
                    
                // };

                // END VIJAYS SWEDEN LAYER
                // VIJAYS COUNTRIES LAYER
 
                // const countrieslayer = L.geoJson(countries, {
                //     onEachFeature: function (feature, layer) {
                //         layer.bindPopup(feature.properties.name);
			    //         }
		        // });

		        // document.getElementById("l2").addEventListener("click", c_layers);
                
                // function c_layers(){
                //     if(mymap.hasLayer(countrieslayer)){
                //         mymap.removeLayer(countrieslayer);
                //     } 
                //     else {
                //         countrieslayer.addTo(mymap);
                //     }
                // };
                
                // END VIJAYS COUNTRIES LAYER

                // cluster_centroids = [{"xcoord": center[0], "ycoord": center[1], "type": "centroid"} for center in centroids]