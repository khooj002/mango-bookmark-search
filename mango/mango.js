 var mangolar = angular.module("mangolar", []);
 //var bookmarksnodes;
 mangolar.controller('MangoCtrl', ['$scope', function($scope) {
 	$scope.updateText=function(text2){
 		chrome.bookmarks.search(text2, function(myBookmarks){
 			// for(i = 0; i < myBookmarks.length; i++){
 			// 	//	var id = myBookmarks[0].id;
 			// 	 var id = myBookmarks[i].id;
 				 // chrome.bookmarks.get(id, function(bookmark){
 				 // 	var url = bookmark[i].url;
 				 // });
 				$scope.bookmarksnodes = myBookmarks;
 			
 		});
 	};
 	$scope.urlclick = function(url) {
				chrome.tabs.create({
					url: url
				});
	};
 }]);
			
 	
// function _search(query) {
// 			  var query = $("searchBox").value;
// 			  chrome.bookmarks.search(query, function (bmk){
// 			  	 array });
// 			 });
// 	}); 