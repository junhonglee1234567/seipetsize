function result_img() {
	var temp = location.href.split("?");
	str = temp[1];
	var temp2 = str.split(":");
	select = temp2[0];
	data = temp2[1];
	if (data == "") {
		alert("측정 길이를 입력하십시오.");
		location.href="safedoor.html";
	} else { 
		result = parseFloat(data);
		var img_src;
		if (select == "0") {
			alert("안전문 종류를 선택하십시오.");
			location.href="safedoor.html";
		} else if (select == "1") {
			if (result < 54) {
				img_src = "result/less_safe.jpg"
			} else if (result >= 54 && result <= 64) {
				img_src = "result/54~64.jpg"
			} else if (result > 64 && result <= 73) {
				img_src = "result/65~73.jpg"
			} else if (result > 73 && result <= 82) {
				img_src = "result/74~82.jpg"
			} else if (result > 82 && result <= 84) {
				img_src = "result/83~84.jpg"
			} else if (result > 84 && result <= 92) {
				img_src = "result/85~92.jpg"
			} else if (result > 92 && result <= 97) {
				img_src = "result/93~97.jpg"
			} else if (result > 97 && result <= 103) {
				img_src = "result/98~103.jpg"
			} else if (result > 103 && result <= 105) {
				img_src = "result/104~105.jpg"
			} else if (result > 105 && result <= 112) {
				img_src = "result/106~112.jpg"
			} else if (result > 112 && result <= 115) {
				img_src = "result/113~115.jpg"
			} else if (result > 115 && result <= 121) {
				img_src = "result/116~121.jpg"
			} else if (result > 121 && result <= 127) {
				img_src = "result/122~127.jpg"
			} else if (result > 127 && result <= 132) {
				img_src = "result/128~132.jpg"
			} else if (result > 132 && result <= 135) {
				img_src = "result/133~135.jpg"
			} else if (result > 135 && result <= 142) {
				img_src = "result/136~142.jpg"
			} else if (result > 142 && result <= 144) {
				img_src = "result/143~144.jpg"
			} else if (result > 144 && result <= 152) {
				img_src = "result/145~152.jpg"
			} else if (result > 152 && result <= 157) {
				img_src = "result/153~157.jpg"
			} else if (result > 157 && result <= 162) {
				img_src = "result/158~162.jpg"
			} else if (result > 162 && result <= 165) {
				img_src = "result/163~165.jpg"
			} else if (result > 165 && result <= 172) {
				img_src = "result/166~172.jpg"
			} else if (result > 172 && result <= 175) {
				img_src = "result/173~175.jpg"
			} else if (result > 175 && result <= 182) {
				img_src = "result/176~182.jpg"
			} else if (result > 182 && result <= 187) {
				img_src = "result/183~187.jpg"
			} else if (result > 187 && result <= 192) {
				img_src = "result/188~192.jpg"
			} else if (result > 192 && result <= 195) {
				img_src = "result/193~195.jpg"
			} else if (result > 195 && result <= 202) {
				img_src = "result/196~202.jpg"
			} else if (result > 202 && result <= 205) {
				img_src = "result/203~205.jpg"
			} else if (result > 205 && result <= 212) {
				img_src = "result/206~212.jpg"
			} else if (result > 212 && result <= 217) {
				img_src = "result/213~217.jpg"
			} else if (result > 217 && result <= 222) {
				img_src = "result/218~222.jpg"
			} else if (result > 222 && result <= 225) {
				img_src = "result/223~225.jpg"
			} else if (result > 225 && result <= 232) {
				img_src = "result/226~232.jpg"
			} else if (result > 232 && result <= 237) {
				img_src = "result/233~237.jpg"
			} else {
				img_src = "result/other_safe.jpg"
			}	
		} else if (select == "2") {
			if (result < 56) {
				img_src = "result2/less_child.jpg"
			} else if (result >= 56 && result <= 63) {
				img_src = "result2/56~63.jpg"
			} else if (result > 63 && result <= 72) {
				img_src = "result2/64~72.jpg"
			} else if (result > 72 && result <= 82) {
				img_src = "result2/73~82.jpg"
			} else if (result > 82 && result <= 84) {
				img_src = "result2/83~84.jpg"
			} else if (result > 84 && result <= 89) {
				img_src = "result2/85~89.jpg"
			} else if (result > 89 && result <= 96) {
				img_src = "result2/90~96.jpg"
			} else if (result > 96 && result <= 103) {
				img_src = "result2/97~103.jpg"
			} else if (result > 103 && result <= 110) {
				img_src = "result2/104~110.jpg"
			} else if (result > 110 && result <= 117) {
				img_src = "result2/111~117.jpg"
			} else if (result > 117 && result <= 124) {
				img_src = "result2/118~124.jpg"
			} else if (result > 124 && result <= 131) {
				img_src = "result2/125~131.jpg"
			} else if (result > 131 && result <= 138) {
				img_src = "result2/132~138.jpg"
			} else if (result > 138 && result <= 145) {
				img_src = "result2/139~145.jpg"
			} else if (result > 145 && result <= 152) {
				img_src = "result2/146~152.jpg"
			} else if (result > 152 && result <= 159) {
				img_src = "result2/153~159.jpg"
			} else if (result > 159 && result <= 166) {
				img_src = "result2/160~166.jpg"
			} else if (result > 166 && result <= 173) {
				img_src = "result2/167~173.jpg"
			} else if (result > 173 && result <= 181) {
				img_src = "result2/174~181.jpg"
			} else if (result > 181 && result <= 187) {
				img_src = "result2/182~187.jpg"
			} else if (result > 187 && result <= 194) {
				img_src = "result2/188~194.jpg"
			} else if (result > 194 && result <= 201) {
				img_src = "result2/195~201.jpg"
			} else if (result > 201 && result <= 208) {
				img_src = "result2/202~208.jpg"
			} else if (result > 208 && result <= 215) {
				img_src = "result2/209~215.jpg"
			} else if (result > 215 && result <= 222) {
				img_src = "result2/216~222.jpg"
			} else if (result > 222 && result <= 229) {
				img_src = "result2/223~229.jpg"
			} else if (result > 229 && result <= 236) {
				img_src = "result2/230~236.jpg"
			} else if (result > 236 && result <= 243) {
				img_src = "result2/237~243.jpg"
			} else if (result > 243 && result <= 250) {
				img_src = "result2/244~250.jpg"
			} else if (result > 250 && result <= 257) {
				img_src = "result2/251~257.jpg"
			} else if (result > 257 && result <= 264) {
				img_src = "result2/258~264.jpg"
			} else if (result > 264 && result <= 271) {
				img_src = "result2/265~271.jpg"
			} else {
				img_src = "result2/other_child.jpg"
			}
		} else if (select == "3") {
			if (result < 74) {
				img_src = "result3/less_premium.jpg"
			} else if (result >= 74 && result <= 83) {
				img_src = "result3/74~83.jpg"
			} else if (result > 83 && result <= 92) {
				img_src = "result3/84~92.jpg"
			} else if (result > 92 && result <= 97) {
				img_src = "result3/93~97.jpg"
			} else if (result > 97 && result <= 102) {
				img_src = "result3/98~102.jpg"
			} else if (result > 102 && result <= 107) {
				img_src = "result3/103~107.jpg"
			} else if (result > 107 && result <= 112) {
				img_src = "result3/108~112.jpg"
			} else if (result > 112 && result <= 115) {
				img_src = "result3/113~115.jpg"
			} else if (result > 115 && result <= 122) {
				img_src = "result3/116~122.jpg"
			} else if (result > 122 && result <= 127) {
				img_src = "result3/123~127.jpg"
			} else if (result > 127 && result <= 132) {
				img_src = "result3/128~132.jpg"
			} else if (result > 132 && result <= 137) {
				img_src = "result3/133~137.jpg"
			} else if (result > 137 && result <= 140) {
				img_src = "result3/138~140.jpg"
			} else if (result > 140 && result <= 144) {
				img_src = "result3/141~144.jpg"
			} else if (result > 144 && result <= 152) {
				img_src = "result3/145~152.jpg"
			} else if (result > 152 && result <= 157) {
				img_src = "result3/153~157.jpg"
			} else if (result > 157 && result <= 162) {
				img_src = "result3/158~162.jpg"
			} else if (result > 162 && result <= 165) {
				img_src = "result3/163~165.jpg"
			} else if (result > 165 && result <= 172) {
				img_src = "result3/166~172.jpg"
			} else if (result > 172 && result <= 175) {
				img_src = "result3/173~175.jpg"
			} else if (result > 175 && result <= 182) {
				img_src = "result3/176~182.jpg"
			} else if (result > 182 && result <= 187) {
				img_src = "result3/183~187.jpg"
			} else if (result > 187 && result <= 192) {
				img_src = "result3/188~192.jpg"
			} else if (result > 192 && result <= 197) {
				img_src = "result3/193~197.jpg"
			} else if (result > 197 && result <= 202) {
				img_src = "result3/198~202.jpg"
			} else if (result > 202 && result <= 212) {
				img_src = "result3/203~212.jpg"
			} else if (result > 212 && result <= 217) {
				img_src = "result3/213~217.jpg"
			} else if (result > 217 && result <= 222) {
				img_src = "result3/218~222.jpg"
			} else if (result > 222 && result <= 225) {
				img_src = "result3/223~225.jpg"
			} else if (result > 225 && result <= 232) {
				img_src = "result3/226~232.jpg"
			} else {
				img_src = "result3/other_premium.jpg"
			}
		}
	}
	return img_src;
}
