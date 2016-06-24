/***********************************************************
** TJHSST Proxy Auto-Configuration Script                 **
** For use with TJHSST school databases                   **
** Use is restricted to TJHSST students and faculty ONLY. **
** All other use is prohibited.                           **
** Originally contributed by William Yang.                **
** Autogenerated version by Brandon Vargo.                **
************************************************************/

function FindProxyForURL(url, host)
{
	if (
		dnsDomainIs(host, ".abc-clio.com") ||
		dnsDomainIs(host, "accessscience.com") ||
		dnsDomainIs(host, ".accessscience.com") ||
		dnsDomainIs(host, "mcgraw-hill.com") ||
		dnsDomainIs(host, ".mcgraw-hill.com") ||
		dnsDomainIs(host, ".eb.com") ||
		dnsDomainIs(host, "library.cqpress.com") ||
		dnsDomainIs(host, ".earthscape.org") ||
		dnsDomainIs(host, ".ebscohost.com") ||
		dnsDomainIs(host, ".ebsco-content.com") ||
		dnsDomainIs(host, "search.serialssolutions.com") ||
		dnsDomainIs(host, "ehrafworldcultures.yale.edu") ||
		dnsDomainIs(host, ".galegroup.com") ||
		dnsDomainIs(host, "nelnetsolutions.com") ||
		dnsDomainIs(host, ".grolier.com") ||
		dnsDomainIs(host, "jchemed.chem.wisc.edu") ||
		dnsDomainIs(host, "www.jstor.org") ||
		dnsDomainIs(host, "web.lexis-nexis.com") ||
		dnsDomainIs(host, ".oed.com") ||
		dnsDomainIs(host, "poll.orspub.com") ||
		dnsDomainIs(host, "proquestk12.com") ||
		dnsDomainIs(host, "proquest.com") ||
		dnsDomainIs(host, ".umi.com") ||
		dnsDomainIs(host, "www.sciencedirect.com") ||
		dnsDomainIs(host, "hwwilsonweb.com") ||
		dnsDomainIs(host, ".nature.com") ||
		dnsDomainIs(host, "portal.bigchalk.com") ||
		dnsDomainIs(host, ".culturegrams.com") ||
		dnsDomainIs(host, ".acs.org") ||
		dnsDomainIs(host, ".opticsinfobase.org") ||
		dnsDomainIs(host, "www.worldbookonline.com") ||
		dnsDomainIs(host, ".tumblebooks.com") ||
		dnsDomainIs(host, "hsus.cambridge.org") ||
		dnsDomainIs(host, ".aps.org") ||
		dnsDomainIs(host, "rm124camera1.tjhsst.edu") ||
		dnsDomainIs(host, "rm124camera2.tjhsst.edu") ||
		dnsDomainIs(host, "rm124camera3.tjhsst.edu") ||
		dnsDomainIs(host, "rm124ipvideo.tjhsst.edu") ||
		dnsDomainIs(host, ".humanitiesebook.org") ||
		dnsDomainIs(host, ".lib.umich.edu") ||
		dnsDomainIs(host, ".hdl.handle.net") ||
		dnsDomainIs(host, ".jove.com") ||
		dnsDomainIs(host, ".marshallcavendishdigital.com") ||
		dnsDomainIs(host, ".cavendishsquaredigital.com") ||
		dnsDomainIs(host, ".salempress.com") ||
		dnsDomainIs(host, "booksinprint.com") ||
		dnsDomainIs(host, ".booksinprint.com") ||
		dnsDomainIs(host, "booksinprint2.com") ||
		dnsDomainIs(host, "ion.tjhsst.edu") ||
		dnsDomainIs(host, ".booksinprint2.com") ||
		dnsDomainIs(host, "whiv.alexanderstreet.com") ||
		dnsDomainIs(host, ".ebrary.com") ||
		dnsDomainIs(host, ".oxfordartonline.com") ||
		dnsDomainIs(host, ".apimages.com") ||
		dnsDomainIs(host, ".sciencemag.org") ||
		dnsDomainIs(host, ".currenthistory.com") ||
		dnsDomainIs(host, "cms.math.ca") ||
		dnsDomainIs(host, ".facebook.com") ||
		dnsDomainIs(host, "charon.tjhsst.edu")


		

	)
			return "PROXY local.border.tjhsst.edu:8080";
		else
			return "DIRECT";
}
