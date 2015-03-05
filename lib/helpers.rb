def formatted_option(o)
  line_split = o.split("-")
  s = line_split[0]
  a = line_split[1].to_s.gsub("_"," ")
  return s, a
end

def formatted_subtotal(q,p)
  '%.2f' % (q * p)
end

def print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  outfile.puts "<tr>"
  outfile.puts "<td>#{sku}</td>"
  outfile.puts "<td>#{attribute}</td>"
  outfile.puts "<td>#{description}</td>"
  outfile.puts "<td>#{uom}</td>"
  if option_price.nil?
    outfile.puts "<td align=\"right\"></td>"
  else
    outfile.puts "<td align=\"right\">$#{'%.2f' % option_price}</td>"
  end
  if option_qty.nil?
    outfile.puts "<td align=\"right\"></td>"
  else
    outfile.puts "<td align=\"right\">#{option_qty}</td>"
  end
  if option_qty.nil? or option_price.nil?
    outfile.puts "<td align=\"right\"></td>"
  else
    ext_price = formatted_subtotal(option_qty,option_price)
    outfile.puts "<td align=\"right\">$#{ext_price}</td>"
  end
  outfile.puts "</tr>"
  return ext_price
end

def format_specs_sheet
  outfile = File.new("./public/spec_selection.html","w")
  total = 0.0

  outfile.puts "<html>"
  outfile.puts "<body>"
  outfile.puts "<center><img src=\"./images/signature_logo_whiteBG.jpg\" /><h1><u>Your Design Selections</u></h1></center>"
  outfile.puts "<p><i>Project:</i> 1630 - The Grove<br />"
  outfile.puts "<i>Model:</i> #{params[:model]}<br />"
  outfile.puts "<i>Elevation:</i> #{params[:elevation]}</p>"
  outfile.puts "<p><i>Customer Name:</i> #{params[:customer_name]}</p>"
  outfile.puts "<p><i>Community/Homesite:</i> #{params[:lot]}</p>"

  outfile.puts "<p>&nbsp;</p>"
  outfile.puts "<table>"
  outfile.puts "<tr bgcolor=\"black\">"
  outfile.puts "<th><font color=\"white\">Product Code</font></th>"
  outfile.puts "<th><font color=\"white\">Finish</font></th>"
  outfile.puts "<th><font color=\"white\">Description</font></th>"
  outfile.puts "<th><font color=\"white\">UofM</font></th>"
  outfile.puts "<th><font color=\"white\">Unit Price</font></th>"
  outfile.puts "<th><font color=\"white\">Qty</font></th>"
  outfile.puts "<th><font color=\"white\">SubTotal</font></th>"
  outfile.puts "</tr>"

  # Exterior options

  outfile.puts "<tr bgcolor=\"#20700a\">"
  outfile.puts "<td colspan=\"7\"><center><b><font color=\"white\">Exterior Options</font></b></center></td>"
  outfile.puts "</tr>"

  # Brick

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Brick Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  option = params[:brick]
  attribute = ""
  sku, description = formatted_option(option) unless option.empty?
  uom = params[:brick_uom]
  option_qty = 1
  option_price = 0
  if !option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "", "", "", "", "", "", ""

  # Stone

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Stone Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  option = params[:stone]
  attribute = ""
  sku, description = formatted_option(option) unless option.empty?
  uom = params[:stone_uom]
  option_qty = 1
  option_price = 0
  if !sku.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "",  "", "", "", "", "", ""

  # Mortar

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Mortar Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  option = params[:mortar]
  attribute = ""
  sku, description = formatted_option(option) unless option.empty?
  uom = params[:mortar_uom]
  option_qty = 1
  option_price = 0
  if !sku.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "",  "", "", "", "", "", ""

  # Window

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Window Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  option = params[:window]
  attribute = ""
  sku, description = formatted_option(option) unless option.empty?
  uom = params[:window_uom]
  option_qty = 1
  option_price = 0
  if !sku.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "",  "", "", "", "", "", ""

  # Gutter

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Gutter Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  option = params[:gutter]
  attribute= ""
  sku, description = formatted_option(option) unless option.empty?
  uom = params[:gutter_uom]
  option_qty = 1
  option_price = 0
  if !sku.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "",  "", "", "", "", "", ""

  # Shingle

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Shingle Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  option = params[:shingle]
  attribute= ""
  sku, description = formatted_option(option) unless option.empty?
  uom = params[:shingle_uom]
  option_qty = 1
  option_price = 0
  if !sku.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "",  "", "", "", "", "", ""

  # Porch and Patio

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Patio and Porch Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  option = params[:patio_concrete_color]
  sku, attribute = formatted_option(option) unless option.empty?
  description = "Stain Color for Exterior Concrete"
  uom = params[:patio_concrete_uom]
  option_qty = 1
  option_price = 0
  if !option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  option = params[:brick_paver_color]
  sku, attribute = formatted_option(option) unless option.empty?
  description = "Brick Paver Pattern/Color"
  uom = params[:brick_paver_color_uom]
  option_qty = 1
  option_price = 0
  if !option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  option = params[:brick_paver_mortar]
  sku, attribute = formatted_option(option) unless option.empty?
  description = "Brick Paver Mortar"
  uom = params[:brick_paver_mortar_uom]
  option_qty = 1
  option_price = 0
  if !option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "",  "", "", "", "", "", ""

  # Kitchen

  outfile.puts "<tr><td colspan=\"7\">&nbsp;</td></tr>"
  outfile.puts "<tr bgcolor=\"#20700a\">"
  outfile.puts "<td colspan=\"7\"><b><center><font color=\"white\">Kitchen Options</font></center></b></td>"
  outfile.puts "</tr>"

  # Cabinet Style-Finish options

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Cabinet Style-Finish Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  ext_price = 0.00
  option = params[:kitchen_island_cabinets].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  description = "Kitchen Island Countertops"
  uom = params[:kitchen_island_cabinets_uom]
  puts params.inspect
  color = params[:kitchen_island_cabinets_color].to_s.chomp
  option_qty = 1
  option_price = 0.00
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  unless color.empty?
    ext_price = print_selection(outfile,"","Color: #{color}","","",nil,nil)
  end
  total += ext_price.to_f
  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "", "", "", "", "", "", ""

  ext_price = 0.00
  option = params[:kitchen_perimeter_cabinets].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  description = "Kitchen Perimeter Countertops"
  uom = params[:kitchen_perimeter_cabinets_uom]
  color = params[:kitchen_perimeter_cabinets_color].to_s.chomp
  option_qty = 1
  option_price = 0.00
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  unless color.empty?
    ext_price = print_selection(outfile,"","Color: #{color}","","",nil,nil)
  end
  total += ext_price.to_f
  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, color, description, uom, option_qty, option_price = "", "", "", "", "", "", "", ""

  # Countertops Options

  ext_price = 0.00
  option = params[:kitchen_island_countertops].to_s.chomp
  sku, attribute = formatted_option(option) unless option.empty?
  case sku
  when "TOPSKITIOT1"
    description = "Countertops - Kitchen Island - Signature"
	option_price = 0.00
  when "TOPSKITIOT2"
    description = "Countertops - Kitchen Island - Classic"
	option_price = 0.00
  when "TOPSKITIOT3"
    description = "Countertops - Kitchen Island - Premier"
	option_price = 870.00
  else
    description = ""
  end
  uom = "Each"
  material = params[:kitchen_island_countertops_color].to_s.gsub("_"," ")
  edge = params[:kitchen_island_countertops_edge].to_s.gsub("_"," ")
  option_qty = 1
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  unless material.empty?
    null_variable = print_selection(outfile,"","","Material: #{material}","",nil,nil)
  end
  unless edge.empty?
    null_variable = print_selection(outfile,"","","Edge: #{edge}","",nil,nil)
  end
  total += ext_price.to_f
  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, material, edge, uom, option_qty, option_price = "", "", "", "", "", "", "", "", ""

  # Perimeter countertops

  ext_price = 0.00
  option = params[:kitchen_perimeter_countertops].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  case sku
  when "TOPSKITKT1"
    description = "Countertops - Kitchen Perimeter - Signature"
	option_price = 0.00
  when "TOPSKITKT2"
    description = "Countertops - Kitchen Perimeter - Classic"
	option_price = 0.00
  when "TOPSKITKT3"
    description = "Countertops - Kitchen Perimeter - Premier"
	option_price = 950.00
  else
    description = "invalid"
  end
  uom = "Each"
  material = params[:kitchen_perimeter_countertops_color].to_s.gsub("_"," ")
  edge = params[:kitchen_perimeter_countertops_edge].to_s.gsub("_"," ")

  puts "\n\n\nkitchen perimeter countertops - not printing material and color"
  puts "color: #{params[:kitchen_perimeter_countertops_color]}"
  puts "edge : #{params[:kitchen_perimeter_countertops_edge]}\n\n\n\n"


  option_qty = 1
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  unless material.empty?
    null_variable = print_selection(outfile,"","","Material: #{material}","",nil,nil)
  end
  unless edge.empty?
    null_variable = print_selection(outfile,"","","Edge: #{edge}","",nil,nil)
  end
  total += ext_price.to_f
  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, material, edge, uom, option_qty, option_price = "", "", "", "", "", "", "", "", ""

  # backsplash options

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Kitchen Backsplash Options</center></b></td>"
  outfile.puts "</tr>"

  ext_price = 0.00
  option = params[:backsplash].chomp
  case option
  when "Signature"
    description = "Backsplash - Signature"
	option_price = 0.00
  when "Classic"
    description = "Backsplash - Classic"
	option_price = 0.00
  when "Premier"
    description = "Backsplash - Premier"
	option_price = 420.00
  else
    description = ""
  end
  uom = "Each"
  style = params[:backsplash_pattern].to_s
  sku, attribute = formatted_option(style) unless style.empty?
  s = attribute.split(":")
  finish = s[0]
  pattern = s[1]
  grout = params[:backsplash_grout].to_s.gsub("_"," ")
  option_qty = 1
  unless style.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,finish,description,uom,option_qty,option_price)
  end
  unless style.empty?
    null_variable = print_selection(outfile,"","","Pattern: #{pattern}","",nil,nil)
  end
  unless grout.empty?
    null_variable = print_selection(outfile,"","","Grout: #{grout}","",nil,nil)
  end
  total += ext_price.to_f
  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, material, edge, uom, option_qty, option_price = "", "", "", "", "", "", "", "", ""

  #Signature - Artisan 1 - Daltile Rittenhouse 3x6 Arctic White Cinderblock
  #Signature - Artisan 1 - Daltile Rittenhouse 3x6 Desert Gray Cinderblock
  #Signature - Heritage 1 - Daltile Rittenhouse 3x6 Biscuit Cinderblock
  #Signature - Heritage 2 - Daltile Rittenhouse 3x6 Black Cinderblock
  #Signature - Heritage 3 - Emser Slate 4x4 Midnight Black Cinderblock
  #Signature - Old World 1 - Emser Fontane 3x6 Ivory Cinderblock
  #Signature - Old World 2 - Emser Fontane 4x4 Walnut Diagonal
  #Signature - Old World 3 - Emser Strands 3x12 Olive Random


  # Sink Options

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Kitchen Sink Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  ext_price - 0.00
  option = params[:kitchen_sink]
  sku, attribute = formatted_option(option) unless option.empty?
  description = attribute.to_s.gsub("_"," ")
  uom = "Each"
  option_qty = 1
  case sku
  when "SINKSSUMKIT"
    option_price = 0.00
  bowl = params[:kitchen_sink_bowl].to_s.chomp
	bowl_sku, bowl_attribute = bowl.split("-")
  bowl_attribute.to_s.gsub!("_"," ")
  when "SSKITFARM"
    option_price = 400.00
  when "WHKITUNDER1"
    option_price = 450.00
  when "WHKITUNDER"
    option_price = 450.00
  when "WHKITFARM"
    option_price = 700.00
  else
    option_price = 0.00
  end
  if !option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  total += ext_price.to_f
  if !bowl.nil?
    ext_price = print_selection(outfile,bowl_sku,bowl_attribute,"Bowl","Each",option_qty,0.00)
  end

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "",  "", "", "", "", "", ""

  # plumbing options

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Kitchen Plumbing Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  sku = params[:kitchen_faucet]
  attribute= ""
  uom = "Each"
  option_qty = 1
  case sku
  when "KOH560CP"
    option_price = 0.00
	description = "Kohler Bellera with Pull Down Spout in Polished Chrome"
  when "KOH560VS"
    option_price = 70.00
	description = "Kohler Bellera with Pull Down Spout in Vibrant Stainless"
  when "KOH560BZ"
    option_price = 80.00
	description = "Kohler Bellera with Pull Down Spout in Oil Rubbed Bronze"
  when "KOH596CP"
    option_price = 30.00
	description = "Kohler Simplice 1 Hole with Pull Down Spout in Polished Chrome"
  when "KOH596VS"
    option_price = 100.00
	description = "Kohler Simplice 1 Hole with Pull Down Spout in Vibrant Stainless"
  when "DAN455158"
    option_price = 220.00
	description = "Danze Parma in Chrome"
  when "DAN455158SS"
    option_price = 400.00
	description = "Danze Parma in Stainless Steel"
  when "KOH72218CP"
    option_price = 450.00
	description = "Kohler Sensate Touchless with Pull Down Spout in Polished Chrome"
  when "KOH72218VS"
    option_price = 590.00
	description = "Kohler Sensate Touchless with Pull Down Spout in Vibrant Stainless"
  when "KOH61313CP"
    option_price = 750.00
	description = "Kohler Parq Bridge Style in Polished Chrome"
  when "KOH61313VS"
    option_price = 1120.00
	description = "Kohler Parq Bridge Style in Vibrant Stainless"
  when "KOH61313BZ"
    option_price = 1120.00
	description = "Kohler Parq Bridge Style in Oil Rubbed Bronze"
  else
    option_price = 0
	description = ""
  end

  if !sku.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  total += ext_price.to_f

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "",  "", "", "", "", "", ""

  # soap dispenser

  section_nil = true

  sku = params[:soap_dispenser]
  attribute = ""
  uom = "Each"
  option_qty = 1
  case sku
  when "KOHSOAPCP"
    description = "Kohler Chrome"
  when "KOHSOAPVS"
    description = "Kohler Vibrant Stainless"
  when "KOHSOAPBZ"
    description = "Kohler Oil Rubbed Bronze"
  else
  end
  option_price = 90.00
  if !sku.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end

  total =+ ext_price.to_f

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "",  "", "", "", "", "", ""

  # Laundry Options

  outfile.puts "<tr><td colspan=\"7\">&nbsp;</td></tr>"
  outfile.puts "<tr bgcolor=\"#20700a\">"
  outfile.puts "<td colspan=\"7\"><b><center><font color=\"white\">Laundry Options</font></center></b></td>"
  outfile.puts "</tr>"

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Laundry Cabinet Style Finish Options</center></b></td>"
  outfile.puts "</tr>"

  # cabinets

  section_nil = true

  ext_price = 0.00
  option = params[:laundry_cabinets].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  description = "Laundry Cabinets"
  uom = "Each"
  color = params[:laundry_cabinets_color].to_s.chomp
  option_qty = 1
  option_price = 0.00
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  unless color.empty?
    ext_price = print_selection(outfile,"","Color: #{color}","","",nil,nil)
  end
  total += ext_price.to_f
  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, color, description, uom, option_qty, option_price = "", "", "", "", "", "", "", ""

  # countertops

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Laundry Countertop Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  ext_price = 0.00
  option = params[:laundry_countertops].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  description = "Laundry Countertop"
  uom = "Each"
  color = params[:kitchen_island_countertops_color].to_s.chomp
  edge
  option_qty = 1
  option_price = 0.00
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  unless color.empty?
    ext_price = print_selection(outfile,"","Finish: #{color}","","",nil,nil)
  end
  total += ext_price.to_f
  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, color, description, uom, option_qty, option_price = "", "", "", "", "", "", "", ""

  # Plug and Switch options





  # Electrical and Wiring Options

  outfile.puts "<tr><td colspan=\"7\">&nbsp;</td></tr>"
  outfile.puts "<tr bgcolor=\"#20700a\">"
  outfile.puts "<td colspan=\"7\"><b><center><font color=\"white\">Electrical and Wiring Options</font></center></b></td>"
  outfile.puts "</tr>"

  # Plug and Switch options

  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Plug and Switch Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  ext_price = 0.00
  option = params[:outlet_plates].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  description = params[:outlet_plates_description]
  uom = params[:outlet_plates_uom]
  option_qty = 1
  option_price = 0.00
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  total += ext_price.to_f
  option, attribute, sku, description, uom, option_qty, option_price = "", "", "", "", "", "", ""

  ext_price = 0.00
  option = params[:island_plates].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  description = params[:island_plates_description]
  uom = params[:island_plates_uom]
  option_qty = 1
  option_price = 0.00
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  total += ext_price.to_f
  option, attribute, sku, description, uom, option_qty, option_price = "", "", "", "", "", "", ""

  ext_price = 0.00
  option = params[:backsplash_plates].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  description = params[:backsplash_plates_description]
  uom = params[:backsplash_plates_uom]
  option_qty = 1
  option_price = 0.00
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  total += ext_price.to_f
  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "", "", "", "", "", "", ""

  # Miscellaneous options

  outfile.puts "<tr><td colspan=\"7\">&nbsp;</td></tr>"
  outfile.puts "<tr bgcolor=\"#20700a\">"
  outfile.puts "<td colspan=\"7\"><b><center><font color=\"white\">Miscellaneous Options</font></center></b></td>"
  outfile.puts "</tr>"
  outfile.puts "<tr bgcolor=\"#d2d9d0\">"
  outfile.puts "<td colspan=\"7\"><b><center>Window Treatment Options</center></b></td>"
  outfile.puts "</tr>"

  section_nil = true

  ext_price = 0.00
  option = params[:blinds25].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  description = params[:blinds25_description]
  uom = params[:blinds25_uom]
  option_qty = params[:blinds25_qty].to_i
  option_price = params[:blinds25_price].to_f
  unless option.empty?
    section_nil = false
	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  total += ext_price.to_f
  option, attribute, sku, description, uom, option_qty, option_price = "", "", "", "", "", "", ""

  ext_price = 0.00
  option = params[:shutters].chomp
  sku, attribute = formatted_option(option) unless option.empty?
  description = params[:shutters_description]
  uom = params[:shutters_uom]
  option_qty = params[:shutters_qty].to_i
  option_price = params[:shutters_price].to_f
  unless option.empty?
    section_nil = false
  	ext_price = print_selection(outfile,sku,attribute,description,uom,option_qty,option_price)
  end
  total += ext_price.to_f

  if section_nil
    outfile.puts "<tr><td colspan=\"7\">No selections made.</td></tr>"
  end
  option, attribute, sku, description, uom, option_qty, option_price = "", "", "", "", "", "", ""

  # Close out the HTML

  outfile.puts "</table>"
  outfile.puts "<p>&nbsp;</p>"
  outfile.puts "<p>Total: $#{'%.2f' % total}</p>"

  outfile.puts "<p>&nbsp;</p>"
  outfile.puts "<p>&nbsp;</p>"
  outfile.puts "------------------------------------------<br />"
  outfile.puts "Homebuyer Signature"

  outfile.puts "</body>"
  outfile.puts "</html>"

  outfile.close

  #<!-- Email spec sheet here -->

end
