enyo.kind({
	name: "MyApps.FeedWebView",
	kind: enyo.SlidingView,
	layoutKind: enyo.VFlexLayout,
	components: [
		{kind: enyo.Header, style: "min-height: 30px;", components: [
     			{kind: enyo.HFlexBox, flex: 1, components: [
         			{content: "", name: "selectedItemName", style: "text-overflow: ellipsis; overflow: hidden; white-space: nowrap;", flex: 1}
     			]}
 		]},
 		{kind: enyo.Scroller, flex: 1, components: [
			{kind: (window.PalmSystem ? enyo.WebView : enyo.Iframe), style:"width:800px", name:"currentFeedItemWebView", onLoadComplete: "hideWebViewSpinner", onLoadStarted: "showWebViewSpinner"}
 		]},
 		{kind: enyo.Toolbar, pack: "justify", components: [
     			{kind: enyo.GrabButton},
     			{flex: 1}

 		]}
	]

});
