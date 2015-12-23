$(function(){


// client side JS OBJECT
var forms = [
     {
        "title": "Contact Form 1", 
        "imageUrl": "external/img/library/1.Order-Our-Cupcakes.jpg", 
        "tags": ["contact","live","website"],
        "category":["business", "premium","best"]
    },
	{
        "title": "Product Review 1", 
        "imageUrl": "external/img/library/13.Emoji-Feedback.jpg", 
        "tags": [],
        "category": ["free"]
    }, 
	{
        "title": "Newsletter Signup 1", 
        "imageUrl": "external/img/library/8.Greenhouse-Inventory.jpg", 
        "tags": [],
         "category": ["dev"]
    }, 
	{
        "title": "Client Satisfaction Survey 1", 
        "imageUrl": "external/img/library/6.Food-Evaluation.jpg", 
        "tags": [],
         "category": ["christmas"]
    }, 
	{
        "title": "Membership Form 1", 
        "imageUrl": "external/img/library/3.Your-Knowledge-of-Geography.jpg", 
        "tags": [],
         "category": ["super"],
    },
    {
        "title": "Table Reservation 1", 
        "imageUrl": "external/img/library/9.Cheerleader-Registration-Form.jpg", 
        "tags": ["restaurant","live"],
         "category": ["best"]
    },
    {
        "title": "Contact Form 2", 
        "imageUrl": "external/img/library/1.Order-Our-Cupcakes.jpg", 
        "tags": ["contact","live"],
        "category": ["business", "premium"]
    },
	{
        "title": "Product Review 2", 
        "imageUrl": "external/img/library/13.Emoji-Feedback.jpg", 
        "tags": [],
        "category": ["free"]
    }, 
	{
        "title": "Newsletter Signup 2", 
        "imageUrl": "external/img/library/8.Greenhouse-Inventory.jpg", 
        "tags": [],
         "category": ["dev"]
    }, 
	{
        "title": "Client Satisfaction Survey 2", 
        "imageUrl": "external/img/library/6.Food-Evaluation.jpg", 
        "tags": [],
         "category": ["christmas"]
    }, 
	{
        "title": "Membership Form 2", 
        "imageUrl": "external/img/library/3.Your-Knowledge-of-Geography.jpg", 
        "tags": [],
         "category": ["super"],
    },
    {
        "title": "Table Reservation 2", 
        "imageUrl": "external/img/library/9.Cheerleader-Registration-Form.jpg", 
        "tags": ["restaurant","live"],
         "category": ["best"]
    },
    {
        "title": "Contact Form 3", 
        "imageUrl": "external/img/library/1.Order-Our-Cupcakes.jpg", 
        "tags": ["contact"],
        "category": ["business", "premium"]
    },
	{
        "title": "Product Review 3", 
        "imageUrl": "external/img/library/13.Emoji-Feedback.jpg", 
        "tags": [],
        "category": ["free"]
    }, 
	{
        "title": "Newsletter Signup 3", 
        "imageUrl": "external/img/library/8.Greenhouse-Inventory.jpg", 
        "tags": [],
         "category": ["dev"]
    }, 
	{
        "title": "Client Satisfaction Survey 3", 
        "imageUrl": "external/img/library/6.Food-Evaluation.jpg", 
        "tags": [],
         "category": ["christmas"]
    }, 
	{
        "title": "Membership Form 3", 
        "imageUrl": "external/img/library/3.Your-Knowledge-of-Geography.jpg", 
        "tags": [],
         "category": ["super"],
    },
    {
        "title": "Table Reservation 3", 
        "imageUrl": "external/img/library/9.Cheerleader-Registration-Form.jpg", 
        "tags": ["restaurant","live"],
         "category": ["best"]
    },
    {
        "title": "Contact Form 4", 
        "imageUrl": "external/img/library/1.Order-Our-Cupcakes.jpg", 
        "tags": ["contact","live","website"],
        "category":["business", "premium"]
    },
	{
        "title": "Product Review 4", 
        "imageUrl": "external/img/library/13.Emoji-Feedback.jpg", 
        "tags": [],
        "category": ["free"]
    }, 
	{
        "title": "Newsletter Signup 4", 
        "imageUrl": "external/img/library/8.Greenhouse-Inventory.jpg", 
        "tags": [],
         "category": ["dev"]
    }, 
	{
        "title": "Client Satisfaction Survey 4", 
        "imageUrl": "external/img/library/6.Food-Evaluation.jpg", 
        "tags": [],
         "category": ["christmas"]
    }, 
	{
        "title": "Membership Form 4", 
        "imageUrl": "external/img/library/3.Your-Knowledge-of-Geography.jpg", 
        "tags": [],
         "category": ["super"],
    },
    {
        "title": "Table Reservation 4", 
        "imageUrl": "external/img/library/9.Cheerleader-Registration-Form.jpg", 
        "tags": ["restaurant","live"],
         "category": ["best"]
    },
    {
        "title": "Contact Form 5", 
        "imageUrl": "external/img/library/1.Order-Our-Cupcakes.jpg", 
        "tags": ["contact","live","website"],
        "category": ["business", "premium"]
    },
	{
        "title": "Product Review 5", 
        "imageUrl": "external/img/library/13.Emoji-Feedback.jpg", 
        "tags": [],
        "category": ["free"]
    }, 
	{
        "title": "Newsletter Signup 5", 
        "imageUrl": "external/img/library/8.Greenhouse-Inventory.jpg", 
        "tags": [],
         "category": ["dev"]
    }, 
	{
        "title": "Client Satisfaction Survey 5", 
        "imageUrl": "external/img/library/6.Food-Evaluation.jpg", 
        "tags": [],
         "category": ["christmas"]
    }, 
	{
        "title": "Membership Form 5", 
        "imageUrl": "external/img/library/3.Your-Knowledge-of-Geography.jpg", 
        "tags": [],
         "category": ["super"],
    },
    {
        "title": "Table Reservation 5", 
        "imageUrl": "external/img/library/9.Cheerleader-Registration-Form.jpg", 
        "tags": ["restaurant","live"],
         "category": ["best"]
    },
    {
        "title": "Contact Form 6", 
        "imageUrl": "external/img/library/1.Order-Our-Cupcakes.jpg", 
        "tags": ["contact","live","website"],
        "category": ["business", "premium"]
    },
	{
        "title": "Product Review 6", 
        "imageUrl": "external/img/library/13.Emoji-Feedback.jpg", 
        "tags": [],
        "category": ["free"]
    }, 
	{
        "title": "Newsletter Signup 6", 
        "imageUrl": "external/img/library/8.Greenhouse-Inventory.jpg", 
        "tags": [],
         "category": ["dev"]
    }, 
	{
        "title": "Client Satisfaction Survey 6", 
        "imageUrl": "external/img/library/6.Food-Evaluation.jpg", 
        "tags": [],
         "category": ["christmas"]
    }, 
	{
        "title": "Membership Form 6", 
        "imageUrl": "external/img/library/3.Your-Knowledge-of-Geography.jpg", 
        "tags": [],
         "category": ["super"],
    },
    {
        "title": "Table Reservation 6", 
        "imageUrl": "external/img/library/9.Cheerleader-Registration-Form.jpg", 
        "tags": ["restaurant","live"],
         "category": ["best"]
    },
    
]

// scroll to forms
$(".fheight.dark").mCustomScrollbar({
	theme:"minimal-dark",
	scrollInertia:200,
	autoHideScrollbar:false,
	advanced:{autoScrollOnFocus:".collapse"},
	callbacks:{
		onScroll:function(){
			$(window).trigger('scroll');
		},
		onTotalScroll: function(){
				appendForms();
			
		}
	}
});



var limit=10;
var offset=0;
var curLimit =0;



appendForms();

// serach forms

$("#inputSearchForm").keyup(function(){
	var searchBy = $(this).val();
	serachByTitle(searchBy);
})


function serachByTitle(searchBy){

	if(searchBy.trim()!==""){
		
		searchBy= searchBy.toLowerCase();
		var searchItem = "";
		var searchItemTitle = "";
		$.each(forms, function(key,val){
			searchItemTitle = val.title.substring(0,searchBy.length)
			if(searchItemTitle.toLowerCase().indexOf(searchBy)!=-1){
				searchItem+="<li class='search_item'><a href='#' data-title='"+val.title+"'>"+val.title+"</a></li>";
			}

		})
		$(".search_box ul").html(searchItem);
		$(".search_box").slideDown();
	}
}
$(".form-control").keyup(function(){
	var formsTitle =  $("#inputSearchForm").val();
	var formsTag =  $("#searchFormTag").val();
	var formsCat =  $("#searchFormCat").val();
	if(formsTitle.trim()=='' && formsTag.trim()=='' && formsCat.trim()==''){
		$(".search_box").slideUp();
		$(".search_box ul").empty();
		$("#forms_content").removeClass("serach_active");
		$("#forms_content").fadeIn();
		$("#search_content").empty();

	}
})
$(document).on('click', '.search_item a',function(){

	var formsTitle=$(this).data("title");
	$(".search_box").slideUp();
	$("#inputSearchForm").val(formsTitle);
	//appendFormsByTitle(formsTitle);
})
$("#serachForms").click(function(){
	var formsTitle =  $("#inputSearchForm").val();
	var formsTag =  $("#searchFormTag").val();
	var formsCat =  $("#searchFormCat").val();
	appendFormsByTitle(formsTitle, formsTag, formsCat);
	console.log(formsTitle);
	console.log(formsTag);
	console.log(formsCat);
})

function appendForms(){

	$("#forms_content").append('<div class="loader"> <img src="external/img/library/loading.gif"></div>');
	
	curLimit = offset+limit;
	if(curLimit > forms.length){
		curLimit = forms.length;
	}
	var form_items_app = "";
	if(forms.hasOwnProperty(offset)){
		console.log(forms.length);
		
		for(var i = offset; i<curLimit;i++){

		var form_tags = "";
		var form_cat = "";

		forms[i].tags.forEach(function(item){
			form_tags+="<a href='#'> "+item+"</a> ";
		})	
		forms[i].category.forEach(function(item){
			form_cat+="<a href='#'> "+item+"</a> ";
		})	
		form_items_app += 
		 '<div class="col-lg-3 col-xs-4 thumbform">'
	              +'<div class="thumbnail c-form">'
	                +'<img src="'+forms[i].imageUrl+'" alt="..." class="img-preview mCS_img_loaded">'
	                +'<div class="caption row">'
	                  +'<div class="col-xs-7 heading">'
	                    +'<a href="#" class="title" title="'+forms[i].title+'">'+forms[i].title+'</a>'
	                 + '</div>'
	                 +'<div class="col-xs-5 status">'
	                   + '<span class="emfi emf-ssl-enabled"></span>'
	                 + '</div>'              
	               + '</div>'
	               + '<div class="meta tags">'
	               + '<span class="emfi emf-tags"></span> Tags:'+form_tags
	               + '</div>'
	                + '<div class="meta cat">'
	               + '<span class="emfi emf-tags"></span> Cat:'+form_cat
	               + '</div>'
	                +'<div class="inverted checkbox lg">'
	                 + '<label for="checkForm-1">'
	                   + '<div id="checkForm-1-styler" class="jq-checkbox cstyle" unselectable="on" style="-webkit-user-select: none; display: inline-block; position: relative; overflow: hidden;"><input id="checkForm-1" type="checkbox" class="cstyle" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div>'
	                  +'</label>'
	               + '</div>'        
	              +'</div>'
	            +'</div>'
		}
		$(".loader").remove();
		
		$("#forms_content").append(form_items_app);

		

	}else{
		$(".loader").remove();
	}	
	
	offset =offset+limit;
}


function appendFormsByTitle(formsTitle, formsTag, formsCat){
	$("#forms_content").addClass("serach_active");
	var form_items_app = "";
	var formsTitleStatus = true;
	var formsTagStatus = true;
	var formsCatStatus = true;


	$.each(forms, function(key,val){
		if(formsTitle.trim()!==''){
			formsTitleStatus = val.title===formsTitle.trim();
		}
		if(formsTag.trim()!==''){
			formsTagStatus = $.inArray(formsTag.trim(), val.tags)!=-1;
		}
		if(formsCat.trim()!==''){
			formsCatStatus = $.inArray(formsCat.trim(), val.category)!=-1;
		}
		
		if(formsTitleStatus && formsTagStatus && formsCatStatus ){
				
		var form_tags = "";
		var form_cat = "";
		val.tags.forEach(function(item){
			form_tags+="<a href='#'> "+item+"</a> ";
		})
		val.category.forEach(function(item){
			form_cat+="<a href='#'> "+item+"</a> ";
		})		
		form_items_app += 
		 '<div class="col-lg-3 col-xs-4 thumbform">'
	              +'<div class="thumbnail c-form">'
	                +'<img src="'+val.imageUrl+'" alt="..." class="img-preview mCS_img_loaded">'
	                +'<div class="caption row">'
	                  +'<div class="col-xs-7 heading">'
	                    +'<a href="#" class="title" title="'+val.title+'">'+val.title+'</a>'
	                 + '</div>'
	                 +'<div class="col-xs-5 status">'
	                   + '<span class="emfi emf-ssl-enabled"></span>'
	                 + '</div>'              
	               + '</div>'
	               + '<div class="meta tags">'
	               + '<span class="emfi emf-tags"></span> Tags:'+form_tags
	               + '</div>'
	               + '<div class="meta cat">'
	               + '<span class="emfi emf-tags"></span> Cat:'+form_cat
	               + '</div>'
	                +'<div class="inverted checkbox lg">'
	                 + '<label for="checkForm-1">'
	                   + '<div id="checkForm-1-styler" class="jq-checkbox cstyle" unselectable="on" style="-webkit-user-select: none; display: inline-block; position: relative; overflow: hidden;"><input id="checkForm-1" type="checkbox" class="cstyle" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;"><div class="jq-checkbox__div"></div></div>'
	                  +'</label>'
	               + '</div>'        
	              +'</div>'
	            +'</div>'
		}
			})
	$("#forms_content").fadeOut();
	$("#search_content").html(form_items_app);
}

// form preview
	$(document).on("click","button.close",function(){
		$(".preview-theme").remove();
	})	
	$(document).on("click",".thumbform",function(){
		$(".preview-theme").remove();
		var imgSrc = $(this).find(".img-preview").attr("src");
		var title = $(this).find(".title").text();
		var tagsCont  = $(this).find(".tags").html();
		var catCont  = $(this).find(".cat").html();
		var preview_str = 
		'<div class="preview-theme row collapse in">'
            +'<div class="col-sm-5 mainpic">'
              +'<figure class="thumbnail">'
               + '<img src="'+imgSrc+'" alt="Preview Image" class="mCS_img_loaded">'
              +'</figure>'                                          
            +'</div>'
           + '<div class="col-sm-7">'
             + '<h3 class="topoff">'+title+'</h3>'
             + '<div class="meta">'
               + tagsCont
              +'</div>'
             + '<p>'
              +  '<button type="button" class="btn btn-primary btn-md" data-dismiss="modal" aria-label="Close">Edit</button>'
              + '<button type="button" class="btn inverted btn-md" data-target="#modalApplyTheme" data-toggle="modal" data-dismiss="modal" aria-label="Close">Apply to Form</button>'
             + '</p>'          
              +'<br>'
             + '<h5 class="subheading">More themes from this category:</h5>'
            +'</div>'
           + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true" class="emfi emf-modal-close"></span></button>'                    
         + '</div>';
         $(this).after(preview_str);
         $(".preview-theme ").slideDown();
	})



})