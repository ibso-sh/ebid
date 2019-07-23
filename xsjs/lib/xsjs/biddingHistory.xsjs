/*eslint no-console: 0, no-unused-vars: 0, dot-notation: 0*/
/*eslint-env node, es6 */
// "use strict";

/*var conn = $.hdb.getConnection();

var  query = "SELECT FROM Bid.BiddingHistory { " +
			" BiddingHistory.BiddingId as \"BiddingId\", " +
            " BidderId as \"BidderId\", " +
            " Biddingdate   as \"Biddingdate \" " +
            " } ";
            
var rs = conn.executeQuery(query);

var body = "";

for( var item of rs ){
	body += item.BiddingId + "\t" +
			item.BidderId + "\t" + item.Biddingdate +  "\n";
}

$.respone.setBody(body);
$.response.contentType = "application/vnd.ms-excel; charset=utf-16le";
$.response.headers.set("Content-Disposition",
		"attachment; filename=Excel.xls");
$.response.status = $.net.http.OK;*/

