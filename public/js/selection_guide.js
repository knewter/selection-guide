function CheckContact(val,elem){
  var element=document.getElementById(elem);
  if(val!='NULL')
    element.style.display='block';
  else
    element.style.display='none';
};
function enable_text(status,elem){
  var element=document.getElementById(elem);	
  if(status)
    element.style.display='block';
  else
	element.style.display='none';
};
function show_cabinet_island_options(val){
  if(val=='CABBENPNTIO-Benton_Painted' || val=='CABLANPNTIO-Landen_Painted') {
    var element=document.getElementById('cabinets-painted'); 
	element.style.display='block';
	var element=document.getElementById('cabinets-stained'); 
	element.style.display='none'; 
	var element=document.getElementById('cabinets-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABBENSTNIO-Benton_Stained' || val=='CABLANSTNIO-Landen_Stained') {
	var element=document.getElementById('cabinets-stained'); 	
	element.style.display='block'; 
	var element=document.getElementById('cabinets-painted'); 
	element.style.display='none';
	var element=document.getElementById('cabinets-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABSAYSTNIO-Saybrooke_Stained') {
	var element=document.getElementById('cabinets-saybrooke'); 
	element.style.display='block'; 
	var element=document.getElementById('cabinets-painted'); 
	element.style.display='none';
	var element=document.getElementById('cabinets-stained'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('cabinets-saybrooke'); 
	element.style.display='none'; 
	var element=document.getElementById('cabinets-painted'); 
	element.style.display='none';
	var element=document.getElementById('cabinets-stained'); 
    element.style.display='none'; 	  
  };
};
function show_cabinet_perimeter_options(val){
  if(val=='CABBENPNTK-Benton_Painted' || val=='CABLANPNTK-Landen_Painted') {
    var element=document.getElementById('cabinets-perimeter-painted'); 
	element.style.display='block';
	var element=document.getElementById('cabinets-perimeter-stained'); 
	element.style.display='none'; 
	var element=document.getElementById('cabinets-perimeter-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABBENSTNK-Benton_Stained' || val=='CABLANSTNK-Landen_Stained') {
	var element=document.getElementById('cabinets-perimeter-stained'); 	
	element.style.display='block'; 
	var element=document.getElementById('cabinets-perimeter-painted'); 
	element.style.display='none';
	var element=document.getElementById('cabinets-perimeter-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABSAYSTNK-Saybrooke_Stained') {
	var element=document.getElementById('cabinets-perimeter-saybrooke'); 
	element.style.display='block'; 
	var element=document.getElementById('cabinets-perimeter-painted'); 
	element.style.display='none';
	var element=document.getElementById('cabinets-perimeter-stained'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('cabinets-perimeter-saybrooke'); 
	element.style.display='none'; 
	var element=document.getElementById('cabinets-perimeter-painted'); 
	element.style.display='none';
	var element=document.getElementById('cabinets-perimeter-stained'); 
    element.style.display='none'; 	  
  };
};
function show_countertops_island_options(val){
  if(val=='TOPSKITIOT1-Signature') {
    var element=document.getElementById('countertops-island-signature'); 
	element.style.display='block';
	var element=document.getElementById('countertops-island-classic'); 
	element.style.display='none'; 
	var element=document.getElementById('countertops-island-premier'); 
	element.style.display='none';
  } else if(val=='TOPSKITIOT2-Classic') {
	var element=document.getElementById('countertops-island-classic'); 	
	element.style.display='block'; 
	var element=document.getElementById('countertops-island-signature'); 
	element.style.display='none';
	var element=document.getElementById('countertops-island-premier'); 
	element.style.display='none';
  } else if(val=='TOPSKITIOT3-Premier') {
	var element=document.getElementById('countertops-island-premier'); 
	element.style.display='block'; 
	var element=document.getElementById('countertops-island-signature'); 
	element.style.display='none';
	var element=document.getElementById('countertops-island-classic'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('countertops-island-signature'); 
	element.style.display='none'; 
	var element=document.getElementById('countertops-island-classic'); 
	element.style.display='none';
	var element=document.getElementById('countertops-island-premier'); 
    element.style.display='none'; 	  
  };
};
function show_countertops_perimeter_options(val){
  if(val=='TOPSKITKT1-Signature') {
    var element=document.getElementById('countertops-perimeter-signature'); 
	element.style.display='block';
	var element=document.getElementById('countertops-perimeter-classic'); 
	element.style.display='none'; 
	var element=document.getElementById('countertops-perimeter-premier'); 
	element.style.display='none';
  } else if(val=='TOPSKITKT2-Classic') {
	var element=document.getElementById('countertops-perimeter-classic'); 	
	element.style.display='block'; 
	var element=document.getElementById('countertops-perimeter-signature'); 
	element.style.display='none';
	var element=document.getElementById('countertops-perimeter-premier'); 
	element.style.display='none';
  } else if(val=='TOPSKITKT3-Premier') {
	var element=document.getElementById('countertops-perimeter-premier'); 
	element.style.display='block'; 
	var element=document.getElementById('countertops-perimeter-signature'); 
	element.style.display='none';
	var element=document.getElementById('countertops-perimeter-classic'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('countertops-perimeter-signature'); 
	element.style.display='none'; 
	var element=document.getElementById('countertops-perimeter-classic'); 
	element.style.display='none';
	var element=document.getElementById('countertops-perimeter-premier'); 
    element.style.display='none'; 	  
  };
};
function show_backsplash_options(val){
  if(val=='Signature') {
    var element=document.getElementById('backsplash-signature'); 
	element.style.display='block';
	var element=document.getElementById('backsplash-classic'); 
	element.style.display='none'; 
	var element=document.getElementById('backsplash-premier'); 
	element.style.display='none';
  } else if(val=='Classic') {
	var element=document.getElementById('backsplash-classic'); 	
	element.style.display='block'; 
	var element=document.getElementById('backsplash-signature'); 
	element.style.display='none';
	var element=document.getElementById('backsplash-premier'); 
	element.style.display='none';
  } else if(val=='Premier') {
	var element=document.getElementById('backsplash-premier'); 
	element.style.display='block'; 
	var element=document.getElementById('backsplash-signature'); 
	element.style.display='none';
	var element=document.getElementById('backsplash-classic'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('backsplash-signature'); 
	element.style.display='none'; 
	var element=document.getElementById('backsplash-classic'); 
	element.style.display='none';
	var element=document.getElementById('backsplash-premier'); 
    element.style.display='none'; 	  
  };
};
function show_kitchen_sink_options(val){
  if(val=='SINKSSUMKIT-Undermount_Stainless_Steel') {
    var element=document.getElementById('sink_options'); 
	element.style.display='block'
  } else {
	var element=document.getElementById('sink_options'); 
	element.style.display='none'; 
  };
};
function show_laundry_cabinet_options(val){
  if(val=='CABBENPNTLA-Benton_Painted' || val=='CABLANPNTLA-Landen_Painted') {
    var element=document.getElementById('laundry-cabinets-painted'); 
	element.style.display='block';
	var element=document.getElementById('laundry-cabinets-stained'); 
	element.style.display='none'; 
	var element=document.getElementById('laundry-cabinets-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABBENSTNLA-Benton_Stained' || val=='CABLANSTNLA-Landen_Stained') {
	var element=document.getElementById('laundry-cabinets-stained'); 	
	element.style.display='block'; 
	var element=document.getElementById('laundry-cabinets-painted'); 
	element.style.display='none';
	var element=document.getElementById('laundry-cabinets-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABSAYSTNLA-Saybrooke_Stained') {
	var element=document.getElementById('laundry-cabinets-saybrooke'); 
	element.style.display='block'; 
	var element=document.getElementById('laundry-cabinets-painted'); 
	element.style.display='none';
	var element=document.getElementById('laundry-cabinets-stained'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('laundry-cabinets-saybrooke'); 
	element.style.display='none'; 
	var element=document.getElementById('laundry-cabinets-painted'); 
	element.style.display='none';
	var element=document.getElementById('laundry-cabinets-stained'); 
    element.style.display='none'; 	  
  };
};
function show_laundry_countertop_options(val){
  if(val=='TOPSLAUT1-Signature') {
    var element=document.getElementById('laundry-cabinets-painted'); 
	element.style.display='block';
	var element=document.getElementById('laundry-cabinets-stained'); 
	element.style.display='none'; 
	var element=document.getElementById('laundry-cabinets-saybrooke'); 
	element.style.display='none';
  } else if(val=='TOPSLAUT2-Classic') {
	var element=document.getElementById('laundry-cabinets-stained'); 	
	element.style.display='block'; 
	var element=document.getElementById('laundry-cabinets-painted'); 
	element.style.display='none';
	var element=document.getElementById('laundry-cabinets-saybrooke'); 
	element.style.display='none';
  } else {
	var element=document.getElementById('laundry-cabinets-saybrooke'); 
	element.style.display='none'; 
	var element=document.getElementById('laundry-cabinets-painted'); 
	element.style.display='none';
	var element=document.getElementById('laundry-cabinets-stained'); 
    element.style.display='none'; 	  
  };
};
function show_laundry_countertop_options(val){
  if(val=='TOPSLAUT1-Signature') {
    var element=document.getElementById('laundry_countertop_signature'); 
	element.style.display='block';
	var element=document.getElementById('laundry_countertop_classic'); 
	element.style.display='none'; 
  } else if(val=='TOPSLAUT2-Classic') {
	var element=document.getElementById('laundry_countertop_classic'); 	
	element.style.display='block'; 
	var element=document.getElementById('laundry_countertop_signature'); 
	element.style.display='none';
  } else {
	var element=document.getElementById('laundry_countertop_signature'); 
	element.style.display='none'; 
	var element=document.getElementById('laundry_countertop_classic'); 
	element.style.display='none';
  };
};
function show_master_bath_cabinet_options(val){
  if(val=='CABBENPNTMB-Benton_Painted' || val=='CABLANPNTMB-Landen_Painted') {
    var element=document.getElementById('master-bath-painted'); 
	element.style.display='block';
	var element=document.getElementById('master-bath-stained'); 
	element.style.display='none'; 
	var element=document.getElementById('master-bath-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABBENSTNMB-Benton_Stained' || val=='CABLANSTNMB-Landen_Stained') {
	var element=document.getElementById('master-bath-stained'); 	
	element.style.display='block'; 
	var element=document.getElementById('master-bath-painted'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABSAYSTNMB-Saybrooke_Stained') {
	var element=document.getElementById('master-bath-saybrooke'); 
	element.style.display='block'; 
	var element=document.getElementById('master-bath-painted'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-stained'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('master-bath-saybrooke'); 
	element.style.display='none'; 
	var element=document.getElementById('master-bath-painted'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-stained'); 
    element.style.display='none'; 	  
  };
};  
function show_master_bath_tub_skirt_options(val){
  if(val=='CABBENPNTT-Benton_Painted' || val=='CABLANPNTT-Landen_Painted') {
    var element=document.getElementById('master-bath-tub-skirt-painted'); 
	element.style.display='block';
	var element=document.getElementById('master-bath-tub-skirt-stained'); 
	element.style.display='none'; 
	var element=document.getElementById('master-bath-tub-skirt-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABBENSTNT-Benton_Stained' || val=='CABLANSTNT-Landen_Stained') {
	var element=document.getElementById('master-bath-tub-skirt-stained'); 	
	element.style.display='block'; 
	var element=document.getElementById('master-bath-tub-skirt-painted'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-tub-skirt-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABSAYSTNT-Saybrooke_Stained') {
	var element=document.getElementById('master-bath-tub-skirt-saybrooke'); 
	element.style.display='block'; 
	var element=document.getElementById('master-bath-tub-skirt-painted'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-tub-skirt-stained'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('master-bath-tub-skirt-saybrooke'); 
	element.style.display='none'; 
	var element=document.getElementById('master-bath-tub-skirt-painted'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-tub-skirt-stained'); 
    element.style.display='none'; 	  
  };
}; 
function show_master_bath_spa_options(val){
  if(val=='CABBENPNTSP-Benton_Painted' || val=='CABLANPNTSP-Landen_Painted') {
    var element=document.getElementById('master-bath-spa-painted'); 
	element.style.display='block';
	var element=document.getElementById('master-bath-spa-stained'); 
	element.style.display='none'; 
	var element=document.getElementById('master-bath-spa-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABBENSTNSP-Benton_Stained' || val=='CABLANSTNSP-Landen_Stained') {
	var element=document.getElementById('master-bath-spa-stained'); 	
	element.style.display='block'; 
	var element=document.getElementById('master-bath-spa-painted'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-spa-saybrooke'); 
	element.style.display='none';
  } else if(val=='CABSAYSTNSP-Saybrooke_Stained') {
	var element=document.getElementById('master-bath-spa-saybrooke'); 
	element.style.display='block'; 
	var element=document.getElementById('master-bath-spa-painted'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-spa-stained'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('master-bath-spa-saybrooke'); 
	element.style.display='none'; 
	var element=document.getElementById('master-bath-spa-painted'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-spa-stained'); 
    element.style.display='none'; 	  
  };
};  
function show_tub_deck_countertops_options(val){
  if(val=='TOPSMBTUBT1-Signature') {
    var element=document.getElementById('tub_deck_countertops-signature'); 
	element.style.display='block';
	var element=document.getElementById('tub_deck_countertops-classic'); 
	element.style.display='none'; 
	var element=document.getElementById('tub_deck_countertops-premier'); 
	element.style.display='none';
  } else if(val=='TOPSMBTUBT2-Classic') {
	var element=document.getElementById('tub_deck_countertops-classic'); 	
	element.style.display='block'; 
	var element=document.getElementById('tub_deck_countertops-signature'); 
	element.style.display='none';
	var element=document.getElementById('tub_deck_countertops-premier'); 
	element.style.display='none';
  } else if(val=='TOPSMBTUBT3-Premier') {
	var element=document.getElementById('tub_deck_countertops-premier'); 
	element.style.display='block'; 
	var element=document.getElementById('tub_deck_countertops-signature'); 
	element.style.display='none';
	var element=document.getElementById('tub_deck_countertops-classic'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('tub_deck_countertops-signature'); 
	element.style.display='none'; 
	var element=document.getElementById('tub_deck_countertops-classic'); 
	element.style.display='none';
	var element=document.getElementById('tub_deck_countertops-premier'); 
    element.style.display='none'; 	  
  };
};
function show_vanity_countertops_options(val){
  if(val=='TOPSMBT1-Signature') {
    var element=document.getElementById('vanity_countertops-signature'); 
	element.style.display='block';
	var element=document.getElementById('vanity_countertops-classic'); 
	element.style.display='none'; 
	var element=document.getElementById('vanity_countertops-premier'); 
	element.style.display='none';
  } else if(val=='TOPSMBT2-Classic') {
	var element=document.getElementById('vanity_countertops-classic'); 	
	element.style.display='block'; 
	var element=document.getElementById('vanity_countertops-signature'); 
	element.style.display='none';
	var element=document.getElementById('vanity_countertops-premier'); 
	element.style.display='none';
  } else if(val=='TOPSMBT3-Premier') {
	var element=document.getElementById('vanity_countertops-premier'); 
	element.style.display='block'; 
	var element=document.getElementById('vanity_countertops-signature'); 
	element.style.display='none';
	var element=document.getElementById('vanity_countertops-classic'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('vanity_countertops-signature'); 
	element.style.display='none'; 
	var element=document.getElementById('vanity_countertops-classic'); 
	element.style.display='none';
	var element=document.getElementById('vanity_countertops-premier'); 
    element.style.display='none'; 	  
  };
};
function show_master_bath_mirror_options(val){
  if(val=='MIRMBTILT-Tilt') {
    var element=document.getElementById('master-bath-mirror-tilt'); 
	element.style.display='block';
	var element=document.getElementById('master-bath-mirror-dec'); 
	element.style.display='none'; 
	var element=document.getElementById('master-bath-mirror-dec2'); 
	element.style.display='none';
  } else if(val=='MIRMBDEC-Decorative_Framed') {
	var element=document.getElementById('master-bath-mirror-dec'); 	
	element.style.display='block'; 
	var element=document.getElementById('master-bath-mirror-tilt'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-mirror-dec2'); 
	element.style.display='none';
  } else if(val=='MIRMBDEC2-Decorative_Framed_2') {
	var element=document.getElementById('master-bath-mirror-dec2'); 
	element.style.display='block'; 
	var element=document.getElementById('master-bath-mirror-tilt'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-mirror-dec'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('master-bath-mirror-tilt'); 
	element.style.display='none'; 
	var element=document.getElementById('master-bath-mirror-dec'); 
	element.style.display='none';
	var element=document.getElementById('master-bath-mirror-dec2'); 
    element.style.display='none'; 	  
  };
};
function show_master_shower_tile_options(val){
  if(val=='Signature') {
    var element=document.getElementById('master_shower_tile-signature'); 
	element.style.display='block';
	var element=document.getElementById('master_shower_tile-classic'); 
	element.style.display='none'; 
	var element=document.getElementById('master_shower_tile-premier'); 
	element.style.display='none';
  } else if(val=='Classic') {
	var element=document.getElementById('master_shower_tile-classic'); 	
	element.style.display='block'; 
	var element=document.getElementById('master_shower_tile-signature'); 
	element.style.display='none';
	var element=document.getElementById('master_shower_tile-premier'); 
	element.style.display='none';
  } else if(val=='Premier') {
	var element=document.getElementById('master_shower_tile-premier'); 
	element.style.display='block'; 
	var element=document.getElementById('master_shower_tile-signature'); 
	element.style.display='none';
	var element=document.getElementById('master_shower_tile-classic'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('master_shower_tile-signature'); 
	element.style.display='none'; 
	var element=document.getElementById('master_shower_tile-classic'); 
	element.style.display='none';
	var element=document.getElementById('master_shower_tile-premier'); 
    element.style.display='none'; 	  
  };
};
function show_master_bath_wall_tile_options(val){
  if(val=='Signature') {
    var element=document.getElementById('master_shower_wall_tile_signature'); 
	element.style.display='block';
	var element=document.getElementById('master_shower_wall_tile_classic'); 
	element.style.display='none'; 
	var element=document.getElementById('master_shower_wall_tile_premier'); 
	element.style.display='none';
  } else if(val=='Classic') {
	var element=document.getElementById('master_shower_wall_tile_classic'); 	
	element.style.display='block'; 
	var element=document.getElementById('master_shower_wall_tile_signature'); 
	element.style.display='none';
	var element=document.getElementById('master_shower_wall_tile_premier'); 
	element.style.display='none';
  } else if(val=='Premier') {
	var element=document.getElementById('master_shower_wall_tile_premier'); 
	element.style.display='block'; 
	var element=document.getElementById('master_shower_wall_tile_signature'); 
	element.style.display='none';
	var element=document.getElementById('master_shower_wall_tile_classic'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('master_shower_wall_tile_signature'); 
	element.style.display='none'; 
	var element=document.getElementById('master_shower_wall_tile_classic'); 
	element.style.display='none';
	var element=document.getElementById('master_shower_wall_tile_premier'); 
    element.style.display='none'; 	  
  };
};
function show_powder_mirror_options(val){
  if(val=='MIRPDTILT-Tilt') {
    var element=document.getElementById('powder-mirror-tilt'); 
	element.style.display='block';
	var element=document.getElementById('powder-mirror-dec'); 
	element.style.display='none'; 
	var element=document.getElementById('powder-mirror-dec2'); 
	element.style.display='none';
  } else if(val=='MIRPDDEC-Decorative_Framed') {
	var element=document.getElementById('powder-mirror-dec'); 	
	element.style.display='block'; 
	var element=document.getElementById('powder-mirror-tilt'); 
	element.style.display='none';
	var element=document.getElementById('powder-mirror-dec2'); 
	element.style.display='none';
  } else if(val=='MIRPDDEC2-Decorative_Framed_2') {
	var element=document.getElementById('powder-mirror-dec2'); 
	element.style.display='block'; 
	var element=document.getElementById('powder-mirror-tilt'); 
	element.style.display='none';
	var element=document.getElementById('powder-mirror-dec'); 
    element.style.display='none'; 
  } else {
	var element=document.getElementById('powder-mirror-tilt'); 
	element.style.display='none'; 
	var element=document.getElementById('powder-mirror-dec'); 
	element.style.display='none';
	var element=document.getElementById('powder-mirror-dec2'); 
    element.style.display='none'; 	  
  };
};
function show_hardwood_options(val){
  if(val=='HWHEN-Mohawk_Henley') {
    var element=document.getElementById('hardwoods-HWHEN'); 
	element.style.display='block';
	var element=document.getElementById('hardwoods-HWNOT'); 
	element.style.display='none'; 
	var element=document.getElementById('hardwoods-HWHENILOCPT'); 
	element.style.display='none';
	var element=document.getElementById('hardwoods-HWNOTILOCPT'); 
	element.style.display='none';
  } else if(val=='HWNOT-Shaw_Nottoway') {
	var element=document.getElementById('hardwoods-HWNOT'); 	
	element.style.display='block'; 
	var element=document.getElementById('hardwoods-HWHEN'); 
	element.style.display='none';
	var element=document.getElementById('hardwoods-HWHENILOCPT'); 
	element.style.display='none';
	var element=document.getElementById('hardwoods-HWNOTILOCPT'); 
	element.style.display='none';	
  } else if(val=='HWHENILOCPT-Mohawk_Henley_in_Lieu_of_Carpet') {
	var element=document.getElementById('hardwoods-HWHENILOCPT'); 
	element.style.display='block'; 
	var element=document.getElementById('hardwoods-HWNOT'); 
	element.style.display='none';
	var element=document.getElementById('hardwoods-HWHEN'); 
    element.style.display='none'; 
	var element=document.getElementById('hardwoods-HWNOTILOCPT'); 
    element.style.display='none';	
  } else if(val=='HWNOTILOCPT-Shaw_Nottoway_in_Lieu_of_Carpet') {
	var element=document.getElementById('hardwoods-HWNOTILOCPT'); 
	element.style.display='block'; 
	var element=document.getElementById('hardwoods-HWNOT'); 
	element.style.display='none';
	var element=document.getElementById('hardwoods-HWHEN'); 
    element.style.display='none'; 
	var element=document.getElementById('hardwoods-HWHENILOCPT'); 
    element.style.display='none';	
  } else {
	var element=document.getElementById('hardwoods-HWHEN'); 
	element.style.display='none'; 
	var element=document.getElementById('hardwoods-HWNOT'); 
	element.style.display='none';
	var element=document.getElementById('hardwoods-HWHENILOCPT'); 
    element.style.display='none'; 	
	var element=document.getElementById('hardwoods-HWNOTILOCPT'); 
    element.style.display='none'; 		
  };
};