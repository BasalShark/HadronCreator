var quarkCombination = "";

quarkDict = [
			//[quarks, name, symbol, super, sub]
			["BBB","triple bottom omega","&Omega;", "-", "bbb"],
			["BBC","charmed double bottom omega", "&Omega;", "0", "bbc"],
			["BBD","double bottom xi", "&Xi;", "-", "bb"],
			["BBS","double bottom omega", "&Omega;", "-", "bb"],
			["BBU","double bottom xi", "&Xi;", "0", "bb"],
			["BCC","double charmed bottom omega", "&Omega;", "+", "bcc"],
			["BCD","charmed bottom sigma","&Sigma;", "0", "bc"],
			["BCS","charmed bottom omega", "&Omega;", "0", "bc"],
			["BCU","charmed bottom sigma","&Sigma;", "+", "bc"],
			["BDD","bottom sigma","&Sigma;", "-", "b"],
			["BDS","bottom xi", "&Xi;", "-", "b"],
			["BDU","bottom sigma","&Sigma;", "+", "b"],
			["BSS","bottom omega","&Omega;", "0", "c"],
			["BSU","bottom xi", "&Xi;", "0", "b"],
			["BUU","bottom omega","&Omega;", "0", "b"],
			["CCC","triple charmed omega","&Omega;", "++", "ccc"],
			["CCD","double charmed xi", "&Xi;", "+", "cc"],
			["CCU","double charmed xi", "&Xi;", "++", "cc"],
			["CCS","double charmed omega", "&Omega;", "+", "cc"],
			["CDD","charmed sigma","&Sigma;", "0", "c"],
			["CDS","charmed xi", "&Xi;", "0", "c"],
			["CDU","charmed lambda","&Lambda;", "+", "c"],
			["CSS","charmed omega","&Omega;", "0", "c"],
			["CSU","charmed xi", "&Xi;", "+", "c"],
			["CUU","charmed sigma","&Sigma;", "++", "c"],
			["DDD","delta","&Delta;", "-", ""],
			["DDU","neutron","n", "", ""],
			["DDS","sigma","&Sigma;", "-", ""],
			["DSS","xi","&Xi;", "-", ""],
			["DSU","lambda","&Lambda;", "0", ""],
			["DUU","proton","p", "", ""],
			["SSS","omega","&Omega;", "-", ""],
			["SSU","xi","&Xi;", "0", ""],
			["SUU","sigma","&Sigma;", "+", ""],
			["UUU","delta","&Delta;", "++", ""],

			["Bb","bottom eta meson","&Eta;", "", "b"],
			["Bc","anti-charmed b meson","<p style = 'text-decoration: overline; display: inline-block;'>B</p>", "-", "c"],	
			["Bd","b meson","B", "0", ""],
			["Bs","anti-strange b meson","<p style = 'text-decoration: overline; display: inline-block;'>B</p>", "0", "s"],	
			["Bu","anti-b meson","B", "-", ""],
			["Cb","charmed b meson","B", "+", "c"],
			["Cc","charmed eta meson","&Eta;", "", "c"],
			["Cd","d meson","D", "+", ""],	
			["Cs","strange d meson","D", "+", "s"],
			["Cu","d meson","D", "0", ""],
			["Db","anti-b meson","<p style = 'text-decoration: overline; display: inline-block;'>B</p>", "0", ""],	
			["Dc","anti-d meson","D", "-", ""],	
			["Ds","kaon","K", "0", ""],	
			["Du","anti-pion","&Pi;", "-", ""],	
			["Sb","strange b meson","B", "0", "s"],
			["Sc","anti-strange d meson","D", "-", "s"],	
			["Sd","anti-kaon","<p style = 'text-decoration: overline; display: inline-block;'>K</p>", "0", ""],	
			["Ss","phi meson","&Phi;", "", ""],		
			["Su","kaon","K", "+", ""],	
			["Ub","b meson","B", "+", ""],	
			["Uc","anti-d meson","<p style = 'text-decoration: overline; display: inline-block;'>D</p>", "0", ""],				
			["Ud","pion","&Pi;", "+", ""],
			["Us","anti-kaon","K", "-", ""]
			];

//-----------------Functions-------------------\\


function printSymbol(quarks) {
	var found = false;
	var i = 0;
	while (!found && i < quarkDict.length) {
		if (quarkDict[i][0] == quarks) {
			document.getElementById("symbol").innerHTML = quarkDict[i][2] + '<sub>' + quarkDict[i][4] + '</sub><sup>' + quarkDict[i][3] + '</sup>';
			document.getElementById("quarkput").innerHTML += ": " + quarkDict[i][1];
			found = true;
		}
		i++;
	}
	
	if (!found) {
		document.getElementById("quarkput").innerHTML += ": unstable";
	}
}


function spacesLeft(quarks) {
	var spaces = 3;
	for (i = 0; i < quarks.length; i++) {
		if (quarks[i] == quarks[i].toUpperCase()) {
			spaces -= 1;
		} else if (quarks[i] == quarks[i].toLowerCase()){
			spaces -= 2;
		}
	}
	return spaces;
}

function addQuark(quarkLetter) {
	spaces = spacesLeft(quarkCombination + quarkLetter);
	if (spaces >= 0 && spaces <= 3) {
		quarkCombination += quarkLetter;
		document.getElementById("quarkput").innerHTML = quarkCombination;
	}
	if (spaces == 0) {
		printSymbol(quarkCombination.split('').sort().join(''));
	}
}

function clearQuark() {
	quarkCombination = "";
	document.getElementById("quarkput").innerHTML = quarkCombination;
	document.getElementById("symbol").innerHTML = "";
}
			