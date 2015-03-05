var paintedOptions = [
  { value: "Antique", text: "Antique" },
  { value: "White", text: "White" },
];

var landenStainedOptions = [
  { value: "Cafe", text: "Cafe" },
  { value: "Saddle", text: "Saddle" },
  { value: "Sarsparilla", text: "Sarsparilla" },
  { value: "Umber", text: "Umber" },
];

var saybrookeStainedOptions = [
  { value: "Autumn", text: "Autumn" },
  { value: "Cafe", text: "Cafe" },
  { value: "Rouge", text: "Rouge" },
  { value: "Saddle", text: "Saddle" },
  { value: "Sarsparilla", text: "Sarsparilla" },
  { value: "Umber", text: "Umber" },
];

var groutOptions = [
  { value: "Alabaster", text: "Alabaster" },
  { value: "Charcoal", text: "Charcoal" },
  { value: "Ivory", text: "Ivory" },
  { value: "Pewter", text: "Pewter" },
  { value: "Silver", text: "Silver" },
  { value: "Warm_Grey", text: "Warm Grey" },
  { value: "White", text: "White" },
];

var kitchenIslandPaintedOptions = {
  title: "Color",
  name: "kitchen_island_cabinets_color",
  options: paintedOptions
};
var kitchenIslandLandenStainedOptions = {
  title: "Color",
  name: "kitchen_island_cabinets_color",
  options: landenStainedOptions
};
var kitchenIslandSaybrookeStainedOptions = {
  title: "Color",
  name: "kitchen_island_cabinets_color",
  options: saybrookeStainedOptions
};

var kitchenPerimeterPaintedOptions = {
  title: "Color",
  name: "kitchen_perimeter_cabinets_color",
  options: paintedOptions
};
var kitchenPerimeterLandenStainedOptions = {
  title: "Color",
  name: "kitchen_perimeter_cabinets_color",
  options: landenStainedOptions
};
var kitchenPerimeterSaybrookeStainedOptions = {
  title: "Color",
  name: "kitchen_perimeter_cabinets_color",
  options: saybrookeStainedOptions
};

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

function childOptionsSection(data){
  var html = $("<div>");
  if(data.childContainerSelector == undefined){
    html.append(subsectionTitle(data.title));
  } else {
    html.append(sectionTitle(data.title));
  }
  html.append($("<div>").addClass("section_options").html(sectionOptions(data)));
  return html;
}

function subsectionTitle(title){
  return $("<div>").addClass("subsection_title").html(title);
}

function sectionTitle(title){
  return $("<div>").addClass("section_title").html(title);
}

function sectionOptions(data){
  var html = $("<div>");
  var select = $("<select>").attr("name", data.name);
  select.append($("<option>").val("").html("Select Option"));
  if(data.childContainerSelector !== undefined){
    select.on("change", function(){
      var selectedOption = $.grep(data.options, function(option, i){
        return option.value == $(select).val();
      })[0];
      $(data.childContainerSelector).html("");
      $.each(selectedOption.children, function(i, child){
        $(data.childContainerSelector).append(childOptionsSection(child));
        $(data.childContainerSelector).append($("<div>").addClass("clear"));
      });
    });
  }
  $.each(data.options, function(i, option){
    select.append($("<option>").val(option.value).html(option.text));
  });
  html.append(select);
  return html;
}

function showKitchenIslandCabinetOptions(){
  var islandCabinetOptions = {
    title: "Island Cabinets",
    name: "kitchen_island_cabinets",
    childContainerSelector: "#kitchen_island_cabinet_options",
    options: [
      { value: "CABBENPNTIO-Benton_Painted", text: "Benton Painted - Each - $0.00", children: [kitchenIslandPaintedOptions] },
      { value: "CABBENSTNIO-Benton_Stained", text: "Benton Stained - Each - $0.00", children: [kitchenIslandLandenStainedOptions] },
      { value: "CABLANPNTIO-Landen_Painted", text: "Landen Painted - Each - $0.00", children: [kitchenIslandPaintedOptions] },
      { value: "CABLANSTNIO-Landen_Stained", text: "Landen Stained - Each - $0.00", children: [kitchenIslandLandenStainedOptions] },
      { value: "CABSAYSTNIO-Saybrooke_Stained", text: "Saybrooke Stained - Each - $0.00", children: [kitchenIslandSaybrookeStainedOptions] }
    ]
  };

  $("#kitchen_island_cabinets").html(childOptionsSection(islandCabinetOptions));
}

function showKitchenPerimeterCabinetOptions(){
  var cabinetOptions = {
    title: "Perimeter Cabinets",
    name: "kitchen_perimeter_cabinets",
    childContainerSelector: "#kitchen_perimeter_cabinet_options",
    options: [
      { value: "CABBENPNTK-Benton_Painted", text: "Benton Painted - Each - $0.00", children: [kitchenPerimeterPaintedOptions] },
      { value: "CABBENSTNK-Benton_Stained", text: "Benton Stained - Each - $0.00", children: [kitchenPerimeterLandenStainedOptions] },
      { value: "CABLANPNTK-Landen_Painted", text: "Landen Painted - Each - $0.00", children: [kitchenPerimeterPaintedOptions] },
      { value: "CABLANSTNK-Landen_Stained", text: "Landen Stained - Each - $0.00", children: [kitchenPerimeterLandenStainedOptions] },
      { value: "CABSAYSTNK-Saybrooke_Stained", text: "Saybrooke Stained - Each - $0.00", children: [kitchenPerimeterSaybrookeStainedOptions] }
    ]
  };

  $("#kitchen_perimeter_cabinets").html(childOptionsSection(cabinetOptions));
}

var signatureCountertopFinishOptions = [
  { value: "Granite_Blanco_Perla_Polished", text: "Granite Blanco Perla Polished" },
  { value: "Granite_New_Venetian_Gold_Polished", text: "Granite New Venetian Gold Polished" },
  { value: "Granite_Raven_Black_Polished", text: "Granite Raven Black Polished" },
  { value: "Granite_Steel_Gray_Polished", text: "Granite Steel Gray Polished" },
  { value: "Granite_Tropic_Brown_Polished", text: "Granite Tropic Brown Polished" },
  { value: "Granite_Uba_Tuba_Polished", text: "Granite Uba Tuba Polished" },
];

var classicCountertopFinishOptions = [
  { value: "Granite_Andino_White_Polished", text: "Granite Andino White Polished" },
  { value: "Granite_Nero_Onion_Leathered", text: "Granite Nero Onion Polished" },
  { value: "Granite_Raven_Black_Honed", text: "Granite Raven Black Honed" },
  { value: "Granite_River_White_Honed", text: "Granite River White Honed" },
  { value: "Granite_River_White_Polished", text: "Granite River White Polished" },
];

var premierCountertopFinishOptions = [
  { value: "Quartz_Silestone_Altair_Polished", text: "Quartz Silestone Altair Polished" },
  { value: "Quartz_Silestone_Blanco_Maple_Polished", text: "Quartz Silestone Blanco Maple Polished" },
  { value: "Quartz_Silestone_Cygnus_Polished", text: "Quartz Silestone Cygnus Polished" },
  { value: "Quartz_Silestone_Doradus_Polished", text: "Quartz Silestone Doradus Polished" },
  { value: "Quartz_Silestone_Grey_Amazon_Polished", text: "Quartz Silestone Grey Amazon Polished" },
  { value: "Quartz_Silestone_Grey_Expo_Polished", text: "Quartz Silestone Grey Expo Polished" },
  { value: "Quartz_Silestone_Ivory_Coast_Polished", text: "Quartz Silestone Ivory Coast Polished" },
  { value: "Quartz_Silestone_Lagoon_Polished", text: "Quartz Silestone Lagoon Polished" },
  { value: "Quartz_Silestone_Lyra_Polished", text: "Quartz Silestone Lyra Polished" },
  { value: "Quartz_Silestone_Merope_Polished", text: "Quartz Silestone Merope Polished" },
  { value: "Quartz_Silestone_White_Zeus_Polished", text: "Quartz Silestone White Zeus Polished" },
  { value: "Quartz_Silestone_Yukon_Blanco_Polished-", text: "Quartz Silestone Yukon Blanco Polished" },
];

var countertopEdgeValues = [
  { value: "1/2_Bullnose", text: "1/2 Bullnose" },
  { value: "1/4_Bevel", text: "1/4 Bevel" },
  { value: "Flat", text: "Flat" },
];

var islandSignatureFinishOptions = {
  title: "Material/Color/Finish",
  name: "kitchen_island_countertops_color",
  options: signatureCountertopFinishOptions
};

var islandClassicFinishOptions = {
  title: "Material/Color/Finish",
  name: "kitchen_island_countertops_color",
  options: classicCountertopFinishOptions
};

var islandPremierFinishOptions = {
  title: "Material/Color/Finish",
  name: "kitchen_island_countertops_color",
  options: premierCountertopFinishOptions
};

var islandCountertopEdgeOptions = {
  title: "Edge",
  name: "kitchen_island_countertops_edge",
  options: countertopEdgeValues
};

var perimeterSignatureFinishOptions = {
  title: "Material/Color/Finish",
  name: "kitchen_perimeter_countertops_color",
  options: signatureCountertopFinishOptions
};

var perimeterClassicFinishOptions = {
  title: "Material/Color/Finish",
  name: "kitchen_perimeter_countertops_color",
  options: classicCountertopFinishOptions
};

var perimeterPremierFinishOptions = {
  title: "Material/Color/Finish",
  name: "kitchen_perimeter_countertops_color",
  options: premierCountertopFinishOptions
};

var perimeterCountertopEdgeOptions = {
  title: "Edge",
  name: "kitchen_perimeter_countertops_edge",
  options: countertopEdgeValues
};

var kitchenIslandCountertopOptions = {
  title: "Island Countertops",
  name: "kitchen_island_countertops",
  childContainerSelector: "#kitchen_island_countertop_options",
  options: [
    { value: "TOPSKITIOT1-Signature", text: "Signature - Each - $0.00", children: [islandSignatureFinishOptions, islandCountertopEdgeOptions] },
    { value: "TOPSKITIOT2-Classic", text: "Classic - Each - $0.00", children: [islandClassicFinishOptions, islandCountertopEdgeOptions] },
    { value: "TOPSKITIOT3-Premier", text: "Premier - Each - $870.00", children: [islandPremierFinishOptions, islandCountertopEdgeOptions] },
  ]
};

var kitchenPerimeterCountertopOptions = {
  title: "Perimeter Countertops",
  name: "kitchen_perimeter_countertops",
  childContainerSelector: "#kitchen_perimeter_countertop_options",
  options: [
    { value: "TOPSKITKT1-Signature", text: "Signature - Each - $0.00", children: [perimeterSignatureFinishOptions, perimeterCountertopEdgeOptions]  },
    { value: "TOPSKITKT2-Classic", text: "Classic - Each - $0.00", children: [perimeterClassicFinishOptions, perimeterCountertopEdgeOptions] },
    { value: "TOPSKITKT3-Premier", text: "Premier - Each - $950.00", children: [perimeterPremierFinishOptions, perimeterCountertopEdgeOptions] },
  ]
};

var kitchenBacksplashSignaturePatternOptions = {
  title: "Style/Color/Pattern",
  name: "backsplash_pattern",
  options: [
    { value: "SPLASHT14-Artisan_1:_Daltile_Rittenhouse_3x6_Arctic_White_Cinderblock", text: "Artisan 1" },
    { value: "SPLASHT15-Artisan_2:_Daltile_Rittenhouse_3x6_Desert_Gray_White_Cinderblock", text: "Artisan 2" },
    { value: "SPLASHT16-Heritage_1:_Daltile_Rittenhouse_3x6_Biscuit_Cinderblock", text: "Heritage 1" },
    { value: "SPLASHT17-Heritage_2:_Daltile_Rittenhouse_3x6_Black_Cinderblock", text: "Heritage 2" },
    { value: "SPLASHT18-Heritage_3:_Emser_Slate_4x4_Midnight_Black_Cinderblock", text: "Heritage 3" },
    { value: "SPLASHT11-Old_World_1:_Emser_Fontane_3x6_Ivory_Cinderblock", text: "Old World 1" },
    { value: "SPLASHT12-Old_World_2:_Emser_Fontane_4x4_Walnut_Diagonal", text: "Old World 2" },
    { value: "SPLASHT12-Old_World_3:_Emser_Strands_3x12_Olive_Random", text: "Old World 3" },
  ]
};

var kitchenBacksplashClassicPatternOptions = {
  title: "Style/Color/Pattern",
  name: "backsplash_pattern",
  options: [
    { value: "SPLASHT23-Artisan_1:_Ember_Perspective_6x24_Grey_Random", text: "Artisan 1" },
    { value: "SPLASHT24-Artisan_2:_Daltile_Rittenhouse_3x6_Arctic_White_Herringbone", text: "Artisan 2" },
    { value: "SPLASHT25-Heritage_1:_Daltile_Rittenhouse_3x6_Desert_Gray_Herringbone", text: "Heritage 1" },
    { value: "SPLASHT26-Heritage_2:_Daltile_Rittenhouse_3x6_Biscuit_Herringbone", text: "Artisan 1" },
    { value: "SPLASHT21-Old World_1:_Emser_Spectrum_3x12_Aderra_Random", text: "Old World 1" },
    { value: "SPLASHT22-Old World_2:_Emser_Spectrum_3x12_Acamar_Random", text: "Old World 2" },
  ]
};

var kitchenBacksplashPremierPatternOptions = {
  title: "Style/Color/Pattern",
  name: "backsplash_pattern",
  options: [
    { value: "SPLASHT33-Artisan_1:_Ember_Palladino_3x6_Albanella_Cinderblock", text: "Artisan 1" },
    { value: "SPLASHT34-Artisan_2:_Ember_Times_Square_2x12_Grey_Random", text: "Artisan 2" },
    { value: "SPLASHT35-Heritage_1:_Ember_Slate_4x4_Autumn_Lilac_Cinderblock", text: "Heritage 1" },
    { value: "SPLASHT31-Old_World_1:_Interceramics_IC_Brite_2x8_Graphite_Random", text: "Old World 1" },
    { value: "SPLASHT32-Old_World_2:_Interceramics_IC_Brite_2x8_Smoke_Random", text: "Old World 2" },
  ]
};

var kitchenBacksplashGroutOptions = {
  title: "Grout",
  name: "backsplash_grout",
  options: groutOptions
};

var kitchenBacksplashOptions = {
  title: "BackSplash Options",
  name: "backsplash",
  childContainerSelector: "#kitchen_backsplash_options",
  options: [
    { value: "Signature", text: "Signature - Each - $0.00", children: [kitchenBacksplashSignaturePatternOptions, kitchenBacksplashGroutOptions] },
    { value: "Classic", text: "Classic - Each - $0.00", children: [kitchenBacksplashClassicPatternOptions, kitchenBacksplashGroutOptions] },
    { value: "Premier", text: "Premier - Each - $420.00", children: [kitchenBacksplashPremierPatternOptions, kitchenBacksplashGroutOptions] },
  ]
};

var kitchenSinkBowlCountOptions = {
  title: "Bowl",
  name: "kitchen_sink_bowl",
  options: [
    { value: "SINKSSUMKIT-1_Large_Bowl", text: "1 Large Bowl" },
    { value: "SINKSSUMKIT-2_Equal_Bowls", text: "2 Equal Bowls" },
    { value: "SINKSSUMKIT-Large_Small_Bowls", text: "Large-Small Bowls" },
  ]
}

var kitchenSinkOptions = {
  title: "Sink Options",
  name: "kitchen_sink",
  childContainerSelector: "#kitchen_sink_options",
  options: [
    { value: "SINKSSUMKIT-Undermount_Stainless_Steel", text: "Undermount Stainless Steel - Each - $0.00", children: [kitchenSinkBowlCountOptions] },
    { value: "SSKITFARM-Hampton_Stainless_Steel_Single_Bowl_Apron_Front_Sink", text: "Hampton Stainless Steel Single Bowl Apron Front Sink - Each - $400.00", children: [] },
    { value: "WHKITUNDER1-White_Undermount_Cast_Iron", text: "White Undermount Cast Iron with One Large Bowl - Each - $450.00", children: [] },
    { value: "WHKITUNDER-White_Undermount_Cast_Iron", text: "White Undermount Cast Iron with Two Equal Bowls - Each - $450.00", children: [] },
    { value: "WHKITFARM-White_Cast_Iron_Apron_Front", text: "White Cast Iron Apron Front - Each - $700.00", children: [] },
  ]
}


function showKitchenIslandCountertopOptions(){
  $("#kitchen_island_countertops").html(childOptionsSection(kitchenIslandCountertopOptions));
}

function showKitchenPerimeterCountertopOptions(){
  $("#kitchen_perimeter_countertops").html(childOptionsSection(kitchenPerimeterCountertopOptions));
}

function showKitchenBacksplashOptions(){
  $("#kitchen_backsplash").html(childOptionsSection(kitchenBacksplashOptions));
}

function showKitchenSinkOptions(){
  $("#kitchen_sink").html(childOptionsSection(kitchenSinkOptions));
}

var laundryCabinetPaintedOptions = {
  title: "Color",
  name: "laundry_cabinets_color",
  options: paintedOptions
};

var laundryCabinetLandenStainedOptions = {
  title: "Color",
  name: "laundry_cabinets_color",
  options: landenStainedOptions
};

var laundryCabinetSaybrookeStainedOptions = {
  title: "Color",
  name: "laundry_cabinets_color",
  options: saybrookeStainedOptions
};

var laundryCabinetOptions = {
  title: "Cabinetry",
  name: "laundry_cabinets",
  childContainerSelector: "#laundry_cabinet_options",
  options: [
    { value: "CABBENPNTLA-Benton_Painted", text: "Benton Painted - Each - $0.00", children: [laundryCabinetPaintedOptions] },
    { value: "CABBENSTNLA-Benton_Stained", text: "Benton Stained - Each - $0.00", children: [laundryCabinetLandenStainedOptions] },
    { value: "CABLANPNTLA-Landen_Painted", text: "Landen Painted - Each - $0.00", children: [laundryCabinetPaintedOptions] },
    { value: "CABLANSTNLA-Landen_Stained", text: "Landen Stained - Each - $0.00", children: [laundryCabinetLandenStainedOptions] },
    { value: "CABSAYSTNLA-Saybrooke_Stained", text: "Saybrooke Stained - Each - $0.00", children: [laundryCabinetSaybrookeStainedOptions] },
  ]
};

function showLaundryCabinetOptions(){
  $("#laundry_cabinets").html(childOptionsSection(laundryCabinetOptions));
}

var laundryCountertopSignatureFinishOptions = {
  title: "Material/Color/Finish",
  name: "laundry_countertop_color",
  options: signatureCountertopFinishOptions
};

var laundryCountertopClassicFinishOptions = {
  title: "Material/Color/Finish",
  name: "laundry_countertop_color",
  options: classicCountertopFinishOptions
};

var laundryCountertopEdgeOptions = {
  title: "Edge",
  name: "laundry_countertop_edge",
  options: countertopEdgeValues
};

var laundryCountertopOptions = {
  title: "Countertops",
  name: "laundry_countertops",
  childContainerSelector: "#laundry_countertop_options",
  options: [
    { value: "TOPSLAUT1-Signature", text: "Signature - Each - $0.00", children: [laundryCountertopSignatureFinishOptions, laundryCountertopEdgeOptions] },
    { value: "TOPSLAUT2-Classic", text: "Classic - Each - $0.00", children: [laundryCountertopClassicFinishOptions, laundryCountertopEdgeOptions] },
  ]
};

function showLaundryCountertopOptions(){
  $("#laundry_countertop").html(childOptionsSection(laundryCountertopOptions));
}

var masterBathCabinetPaintedOptions = {
  title: "Color",
  name: "master_bath_cabinets_color",
  options: paintedOptions
};

var masterBathCabinetLandenStainedOptions = {
  title: "Color",
  name: "master_bath_cabinets_color",
  options: landenStainedOptions
};

var masterBathCabinetSaybrookeStainedOptions = {
  title: "Color",
  name: "master_bath_cabinets_color",
  options: saybrookeStainedOptions
};

var masterBathCabinetOptions = {
  title: "Cabinetry",
  name: "master_bath_cabinets",
  childContainerSelector: "#master_bath_cabinet_options",
  options: [
    { value: "CABBENPNTMB-Benton_Painted", text: "Benton Painted - Each - $0.00", children: [masterBathCabinetPaintedOptions] },
    { value: "CABBENSTNMB-Benton_Stained", text: "Benton Stained - Each - $0.00", children: [masterBathCabinetLandenStainedOptions] },
    { value: "CABLANPNTMB-Landen_Painted", text: "Landen Painted - Each - $0.00", children: [masterBathCabinetPaintedOptions] },
    { value: "CABLANSTNMB-Landen_Stained", text: "Landen Stained - Each - $0.00", children: [masterBathCabinetLandenStainedOptions] },
    { value: "CABSAYSTNMB-Saybrooke_Stained", text: "Saybrooke Stained - Each - $0.00", children: [masterBathCabinetSaybrookeStainedOptions] },
  ]
};

function showMasterBathCabinetOptions(){
  $("#master_bath_cabinets").html(childOptionsSection(masterBathCabinetOptions));
}

var masterBathTubSkirtPaintedOptions = {
  title: "Color",
  name: "master-bath-tub-skirt-color",
  options: paintedOptions
};

var masterBathTubSkirtLandenStainedOptions = {
  title: "Color",
  name: "master-bath-tub-skirt-color",
  options: landenStainedOptions
};

var masterBathTubSkirtSaybrookeStainedOptions = {
  title: "Color",
  name: "master-bath-tub-skirt-color",
  options: saybrookeStainedOptions
};

var masterBathTubSkirtOptions = {
  title: "Tub Skirt",
  name: "master_bath_tub_skirt",
  childContainerSelector: "#master_bath_tub_skirt_options",
  options: [
    { value: "CABBENPNTT-Benton_Painted", text: "Benton Painted - Each - $0.00", children: [masterBathTubSkirtPaintedOptions]  },
    { value: "CABBENSTNT-Benton_Stained", text: "Benton Stained - Each - $0.00", children: [masterBathTubSkirtLandenStainedOptions]  },
    { value: "CABLANPNTT-Landen_Painted", text: "Landen Painted - Each - $0.00", children: [masterBathTubSkirtPaintedOptions]  },
    { value: "CABLANSTNT-Landen_Stained", text: "Landen Stained - Each - $0.00", children: [masterBathTubSkirtLandenStainedOptions]  },
    { value: "CABSAYSTNT-Saybrooke_Stained", text: "Saybrooke Stained - Each - $0.00", children: [masterBathTubSkirtSaybrookeStainedOptions]  },
  ]
};

function showMasterBathTubSkirtOptions(){
  $("#master_bath_tub_skirt").html(childOptionsSection(masterBathTubSkirtOptions));
}

var masterBathSpaPaintedOptions = {
  title: "Color",
  name: "master-bath-spa-color",
  options: paintedOptions
};

var masterBathSpaLandenStainedOptions = {
  title: "Color",
  name: "master-bath-spa-color",
  options: landenStainedOptions
};

var masterBathSpaSaybrookeStainedOptions = {
  title: "Color",
  name: "master-bath-spa-color",
  options: saybrookeStainedOptions
};

var masterBathSpaOptions = {
  title: "SPA Bath",
  name: "master_bath_spa",
  childContainerSelector: "#master_bath_spa_options",
  options: [
    { value: "CABBENPNTSP-Benton_Painted", text: "Benton Painted - Each - $0.00", children: [masterBathSpaPaintedOptions] },
    { value: "CABBENSTNSP-Benton_Stained", text: "Benton Stained - Each - $0.00", children: [masterBathSpaLandenStainedOptions] },
    { value: "CABLANPNTSP-Landen_Painted", text: "Landen Painted - Each - $0.00", children: [masterBathSpaPaintedOptions] },
    { value: "CABLANSTNSP-Landen_Stained", text: "Landen Stained - Each - $0.00", children: [masterBathSpaLandenStainedOptions] },
    { value: "CABSAYSTNSP-Saybrooke_Stained", text: "Saybrooke Stained - Each - $0.00", children: [masterBathSpaSaybrookeStainedOptions] },
  ]
};

function showMasterBathSpaOptions(){
  $("#master_bath_spa").html(childOptionsSection(masterBathSpaOptions));
}

var masterBathTubDeckSignatureFinishOptions = {
  title: "Material/Color/Finish",
  name: "tub_deck_countertops_color",
  options: signatureCountertopFinishOptions
};

var masterBathTubDeckClassicFinishOptions = {
  title: "Material/Color/Finish",
  name: "tub_deck_countertops_color",
  options: classicCountertopFinishOptions
};

var masterBathTubDeckPremierFinishOptions = {
  title: "Material/Color/Finish",
  name: "tub_deck_countertops_color",
  options: premierCountertopFinishOptions
};

var masterBathTubDeckCountertopEdgeOptions = {
  title: "Edge",
  name: "tub_deck_countertops_edge",
  options: countertopEdgeValues
};

var masterBathTubDeckOptions = {
  title: "Tub Deck",
  name: "tub_deck_countertops",
  childContainerSelector: "#master_bath_tub_deck_options",
  options: [
    { value: "TOPSMBTUBT1-Signature", text: "Signature - Each - $0.00", children: [masterBathTubDeckSignatureFinishOptions, masterBathTubDeckCountertopEdgeOptions] },
    { value: "TOPSMBTUBT2-Classic", text: "Classic - Each - $0.00", children: [masterBathTubDeckClassicFinishOptions, masterBathTubDeckCountertopEdgeOptions] },
    { value: "TOPSMBTUBT3-Premier", text: "Premier - Each - $280.00", children: [masterBathTubDeckPremierFinishOptions, masterBathTubDeckCountertopEdgeOptions] },
  ]
};

function showMasterBathTubDeckOptions(){
  $("#master_bath_tub_deck").html(childOptionsSection(masterBathTubDeckOptions));
}

var masterBathVanityCountertopSignatureOptions = {
  title: "Color",
  name: "vanity_countertops_color",
  options: signatureCountertopFinishOptions
};

var masterBathVanityCountertopClassicOptions = {
  title: "Color",
  name: "vanity_countertops_color",
  options: classicCountertopFinishOptions
};

var masterBathVanityCountertopPremierOptions = {
  title: "Color",
  name: "vanity_countertops_color",
  options: premierCountertopFinishOptions
};

var masterBathVanityCountertopEdgeOptions = {
  title: "Edge",
  name: "vanity_countertops_edge",
  options: countertopEdgeValues
};

var masterBathVanityCountertopOptions = {
  title: "Vanity",
  name: "vanity_countertops",
  childContainerSelector: "#master_bath_vanity_countertop_options",
  options: [
    { value: "TOPSMBT1-Signature", text: "Signature - Each - $0.00", children: [masterBathVanityCountertopSignatureOptions, masterBathVanityCountertopEdgeOptions] },
    { value: "TOPSMBT2-Classic", text: "Classic - Each - $0.00", children: [masterBathVanityCountertopClassicOptions, masterBathVanityCountertopEdgeOptions] },
    { value: "TOPSMBT3-Premier", text: "Premier - Each - $630.00", children: [masterBathVanityCountertopPremierOptions, masterBathVanityCountertopEdgeOptions] },
  ]
};

function showMasterBathVanityCountertopOptions(){
  $("#master_bath_vanity_countertops").html(childOptionsSection(masterBathVanityCountertopOptions));
}

var masterBathMirrorTiltFinishOptions = {
  title: "Finish",
  name: "master-bath-mirror-finish",
  options: [
    { value: "Chrome_Plate_Brackets", text: "Chrome Plate Brackets" },
    { value: "Oil_Rubbed_Bronze_Plate_Brackets", text: "Oil Rubbed Bronze Plate Brackets" },
    { value: "Stainless_Steel_Plate_Brackets", text: "Stainless Steel Plate Brackets" },
  ]
};

var masterBathMirrorTiltShapeOptions = {
  title: "Shape",
  name: "master-bath-mirror-shape",
  options: [
    { value: "Oval", text: "Oval" },
    { value: "Rectangular", text: "Rectangular" },
  ]
};

var masterBathMirrorDecColorOptions = {
  title: "Color",
  name: "master-bath-mirror-finish",
  options: [
    { value: "Brown_Ribbed", text: "Brown Ribbed" },
    { value: "Cream_Sloped_with_Bronze_Lip", text: "Cream Sloped with Bronze Lip" },
    { value: "Painted_1x4_Frame_(color_to_match_trim_in_room)", text: "Painted 1x4 Frame (color to match trim in room)" },
    { value: "Silver_Sloped", text: "Silver Sloped" },
    { value: "Silver_with_Detailed_Lip", text: "Silver with Detailed Lip" },
  ]
};

var masterBathMirrorDec2FinishOptions = {
  title: "Color",
  name: "master-bath-mirror-finish",
  options: [
    { value: "Brown_Sloped_with_Bronze_Finish", text: "Brown Sloped with Bronze Finish" },
  ]
};

var masterBathMirrorOptions = {
  title: "Mirror",
  name: "master_bath_mirror",
  childContainerSelector: "#master_bath_mirror_options",
  options: [
    { value: "MIRMBTILT-Tilt", text: "Tilt - Each - $0.00", children: [masterBathMirrorTiltFinishOptions, masterBathMirrorTiltShapeOptions] },
    { value: "MIRMBDEC-Decorative_Framed", text: "Decorative_Framed - Each - $0.00", children: [masterBathMirrorDecColorOptions] },
    { value: "MIRMBDEC2-Decorative_Framed_2", text: "Decorative Framed 2 - Each - $160.00", children: [masterBathMirrorDec2FinishOptions] },
  ]
};

function showMasterBathMirrorOptions(){
  $("#master_bath_mirror").html(childOptionsSection(masterBathMirrorOptions));
}

var masterShowerSignatureFloorTileOptions = {
  title: "Style/Color/Pattern",
  name: "master_shower_tile_pattern",
  options: [
    { value: "TILESHFLT13-Artisan_1:_Emser_Pacific_2x2_Natural_Shower_Floor_Laid_in_a_Straight_Pattern", text: "Artisan 1" },
    { value: "TILESHFLT14-Artisan_2:_RF_Henry_Meshmounted_1x_Hex_Almond_Shower_Floor", text: "Artisan 2" },
    { value: "TILESHFLT15-Heritage_1:_RF_Henry_Meshmounted_1x_Hex_Ice_White_Shower_Floor", text: "Heritage 1" },
    { value: "TILESHFLT16-Heritage_2:_RF_Henry_Meshmounted_1x_Hex_Black_Shower_Floor", text: "Heritage 2" },
    { value: "TILESHFLT11-Old_World_1:_Emser_Fontane_4x4_Ivory_Shower_Floor_Laid_in_a_Straight_Pattern", text: "Old World 1" },
    { value: "TILESHFLT12-Old_World_2:_Emser_Fontane_4x4_Walnut_Shower_Floor_laid_in_a_Straight_Pattern", text: "Old World 2" },
  ]
};

var masterShowerClassicFloorTileOptions = {
  title: "Style/Color/Pattern",
  name: "master_shower_tile_pattern",
  options: [
    { value: "TILESHFLT23-Artisan_1:_Ember_Meshmounted_Cream_Penny_Round_Shower_Floor", text: "Artisan 1" },
    { value: "TILESHFLT24-Artisan_2:_Emser_Meshmounted_White_Penny_Round_Shower_Floor", text: "Artisan 2" },
    { value: "TILESHFLT25-Heritage_1:_Emser_Meshmounted_Tan_Round_Venetian_Pebble_Shower_Floor", text: "Heritage 1" },
    { value: "TILESHFLT26-Heritage_2:_Emser_Meshmounted_Ivory_Round_Venetian_Pebble_Shower_Floor", text: "Heritage 2" },
    { value: "TILESHFLT21-Old World_1:_Emser_Meshmounted_Silver_Penny_Round_Shower_Floor", text: "Old World 1" },
    { value: "TILESHFLT22-Old World_2:_Emser_Meshmounted_Pewter_Penny_Round_Shower_Floor", text: "Old World 2" },
  ]
};

var masterShowerPremierFloorTileOptions = {
  title: "Style/Color/Pattern",
  name: "master_shower_tile_pattern",
  options: [
    { value: "TILESHFLT31-Old_World_1:_Emser_Meshmounted_Tan_Flat_Venetian_Pebble_Shower_Floor", text: "Old World 1" },
    { value: "TILESHFLT32-Old_World_2:_Emser_Meshmounted_Ivory_Flat_Venetian_Pebble_Shower_Floor", text: "Old World 2" },
  ]
};

var masterShowerFloorTileGroutOptions = {
  title: "Grout",
  name: "master_shower_tile_grout",
  options: groutOptions
};

var masterShowerFloorTileOptions = {
  title: "Shower Floor Tile",
  name: "shower_floor_tile",
  childContainerSelector: "#master_shower_floor_tile_options",
  options: [
    { value: "Signature", text: "Signature - Each - $0.00", children: [masterShowerSignatureFloorTileOptions, masterShowerFloorTileGroutOptions] },
    { value: "Classic", text: "Classic - Each - $0.00", children: [masterShowerClassicFloorTileOptions, masterShowerFloorTileGroutOptions] },
    { value: "Premier", text: "Premier - Each - $340.00", children: [masterShowerPremierFloorTileOptions, masterShowerFloorTileGroutOptions] },
  ]
};

function showMasterShowerFloorTileOptions(){
  $("#master_shower_floor_tile").html(childOptionsSection(masterShowerFloorTileOptions));
}

var masterShowerSignatureWallTileOptions = {
  title: "Style/Color/Pattern",
  name: "master_shower_wall_tile_pattern",
  options: [
    { value: "TILESHWAT13-Artisan_1:_Emser_Paseo_13x13_Cream_Shower_Walls_laid_in_a_Diagonal_Pattern", text: "Artisan 1" },
    { value: "TILESHWAT14-Artisan_2:_Emser_Country_6x24_Oxford_Shower_Walls_laid_in_Random_Pattern", text: "Artisan 2" },
    { value: "TILESHWAT15-Heritage_1:_Emser_St._Moritz_12x12_Olive_Shower_Walls_laid_in_a_Diagonal_Pattern", text: "Heritage 1" },
    { value: "TILESHWAT16-Heritage_2:_Emser_Toledo_13x13_Walnut_Shower_Walls_laid_in_a_Cinderblock_Pattern_with_an_Emser_4x12_Pacific_Decorative_Listello", text: "Heritage 2" },
    { value: "TILESHWAT11-Old_World_1:_Emser_Del_Sol_13x13_100_Shower_Walls_laid_in_a_Diagonal_Pattern", text: "Old World 1" },
    { value: "TILESHWAT12-Old_World_2:_Emser_Lucerne_13x13_Matterhorne_Shower_Walls_laid_in_a_Diagonal_Pattern", text: "Old World 2" },
  ]
};

var masterShowerClassicWallTileOptions = {
  title: "Style/Color/Pattern",
  name: "master_shower_wall_tile_pattern",
  options: [
    { value: "TILESHWAT23-Artisan_1:_Emser_St._Moritz_12x12_Silver_Shower_Walls_laid_in_a_Diagonal_Pattern", text: "Artisan 1" },
    { value: "TILESHWAT24-Artisan_2:_Emser_Cosmopolitan_13x13_Charcoal_Shower_Walls_laid_in_a_Diagonal_Pattern", text: "Artisan 2" },
    { value: "TILESHWAT25-Heritage_1:_Daltite_Rittenhouse_3x6_Linen_Shower_Walls_laid_in_a_Cinderblock_Pattern", text: "Heritage 1" },
    { value: "TILESHWAT26-Heritage_2:_Daltite_Rittenhouse_3x6_White_Shower_Walls_laid_in_a_Cinderblock_Pattern", text: "Heritage 2" },
    { value: "TILESHWAT21-Old World_1:_Emser_Lucerne_13x13_Matterhorne_Shower_Walls_laid_in_a_Diagonal_Pattern_with_an_Emser_1x1_Autumn_Lilac_Slate_Insert", text: "Old World 1" },
    { value: "TILESHWAT22-Old World_2:_Shaw_Del_Sol_13x13_100_Shower_Walls_laid_in_a_Diagonal_Pattern_with_an_Emser_5/8in.x5/8in._Lucente_Campo_Insert", text: "Old World 2" },
  ]
};

var masterShowerPremierWallTileOptions = {
  title: "Style/Color/Pattern",
  name: "master_shower_wall_tile_pattern",
  options: [
    { value: "TILESHWAT32-Artisan_1:_Emser_Motion_12x12_Drift_Shower_Walls_laid_in_a_Diagonal_Pattern", text: "Artisan 1" },
    { value: "TILESHFLT33-Heritage_1:_Emser_Palladino_12x12_Albanna_Shower_Walls_laid_in_a_Diagonal_Pattern", text: "Heritage 1" },
    { value: "TILESHFLT31-Old_World_1:_Emser_Spectrum_13x13_Acamar_Shower_Walls_laid_in_a_Diagonal_Pattern", text: "Old World 1" },
  ]
};

var masterShowerWallTileGroutOptions = {
  title: "Grout",
  name: "master_shower_wall_tile_grout",
  options: groutOptions
};

var masterShowerWallTileOptions = {
  title: "Wall Tile &amp; Scheme",
  name: "shower_wall_tile",
  childContainerSelector: "#master_shower_wall_tile_options",
  options: [
    { value: "Signature", text: "Signature - Each - $0.00", children: [masterShowerSignatureWallTileOptions, masterShowerWallTileGroutOptions] },
    { value: "Classic", text: "Classic - Each - $0.00", children: [masterShowerClassicWallTileOptions, masterShowerWallTileGroutOptions] },
    { value: "Premier", text: "Premier - Each - $490.00", children: [masterShowerPremierWallTileOptions, masterShowerWallTileGroutOptions] },
  ]
};

function showMasterShowerWallTileOptions(){
  $("#master_shower_wall_tile").html(childOptionsSection(masterShowerWallTileOptions));
}

var powderMirrorTiltFinishOptions = {
  title: "Finish",
  name: "powder-mirror-finish",
  options: [
    { value: "Chrome_Plate_Brackets", text: "Chrome Plate Brackets" },
    { value: "Oil_Rubbed_Bronze_Plate_Brackets", text: "Oil Rubbed Bronze Plate Brackets" },
    { value: "Stainless_Steel_Plate_Brackets", text: "Stainless Steel Plate Brackets" },
  ]
};

var powderMirrorTiltShapeOptions = {
  title: "Shape",
  name: "powder-mirror-shape",
  options: [
    { value: "Oval", text: "Oval" },
    { value: "Rectangular", text: "Rectangular" },
  ]
};

var powderMirrorDecFinishOptions = {
  title: "Finish",
  name: "powder-mirror-finish",
  options: [
    { value: "Brown_Ribbed", text: "Brown Ribbed" },
    { value: "Cream_Sloped_with_Bronze_Lip", text: "Cream Sloped with Bronze Lip" },
    { value: "Painted_1x4_Frame_(color_to_match_trim_in_room)", text: "Painted 1x4 Frame (color to match trim in room)" },
    { value: "Silver_Sloped", text: "Silver Sloped" },
    { value: "Silver_with_Detailed_Lip", text: "Silver with Detailed Lip" },
  ]
};

var powderMirrorDec2FinishOptions = {
  title: "Finish",
  name: "powder-mirror-finish",
  options: [
    { value: "Brown_Sloped_with_Bronze_Finish", text: "Brown Sloped with Bronze Finish" },
  ]
};

var powderMirrorOptions = {
  title: "Mirror",
  name: "shower_wall_tile",
  childContainerSelector: "#powder_mirror_options",
  options: [
    { value: "MIRPDTILT-Tilt", text: "Tilt - Each - $0.00", children: [powderMirrorTiltFinishOptions, powderMirrorTiltShapeOptions] },
    { value: "MIRPDDEC-Decorative_Framed", text: "Decorative_Framed - Each - $0.00", children: [powderMirrorDecFinishOptions] },
    { value: "MIRPDDEC2-Decorative_Framed_2", text: "Decorative Framed 2 - Each - $150.00", children: [powderMirrorDec2FinishOptions] },
  ]
};

function showPowderMirrorOptions(){
  $("#powder_mirror").html(childOptionsSection(powderMirrorOptions));
}

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

$(function(){
  showKitchenIslandCabinetOptions();
  showKitchenPerimeterCabinetOptions();
  showKitchenIslandCountertopOptions();
  showKitchenPerimeterCountertopOptions();
  showKitchenBacksplashOptions();
  showKitchenSinkOptions();
  showLaundryCabinetOptions();
  showLaundryCountertopOptions();
  showMasterBathCabinetOptions();
  showMasterBathTubSkirtOptions();
  showMasterBathSpaOptions();
  showMasterBathTubDeckOptions();
  showMasterBathVanityCountertopOptions();
  showMasterBathMirrorOptions();
  showMasterShowerFloorTileOptions();
  showMasterShowerWallTileOptions();
  showPowderMirrorOptions();
});
