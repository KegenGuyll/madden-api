export const receivingSortList = [
  "recCatches.asc",
  "recCatches.desc",
  "recCatchPct.asc",
  "recCatchPct.desc",
  "recDrops.asc",
  "recDrops.desc",
  "recLongest.asc",
  "recLongest.desc",
  "recTDs.asc",
  "recTDs.desc",
  "recYdsAfterCatch.asc",
  "recYdsAfterCatch.desc",
  "recYacPerCatch.asc",
  "recYacPerCatch.desc",
  "recYds.asc",
  "recYds.desc",
  "recYdsPerCatch.asc",
  "recYdsPerCatch.desc",
  "recYdsPerGame.asc",
  "recYdsPerGame.desc",
];

export const passingSortList = [
  "passAtt.asc",
  "passAtt.desc",
  "passComp.asc",
  "passComp.desc",
  "passInts.asc",
  "passInts.desc",
  "passLongest.asc",
  "passLongest.desc",
  "passerRating.asc",
  "passerRating.desc",
  "passSacks.asc",
  "passSacks.desc",
  "passTDs.asc",
  "passTDs.desc",
  "passYds.asc",
  "passYds.desc",
  "passYdsPerAtt.asc",
  "passYdsPerAtt.desc",
  "passYdsPerGame.asc",
  "passYdsPerGame.desc",
];

export const rushingSortList = [
  "rushAtt.asc",
  "rushAtt.desc",
  "rushBrokenTackles.asc",
  "rushBrokenTackles.desc",
  "rushFum.asc",
  "rushFum.desc",
  "rushLongest.asc",
  "rushLongest.desc",
  "rushTDs.asc",
  "rushTDs.desc",
  "rush20PlusYds.asc",
  "rush20PlusYds.desc",
  "rushYdsAfterContact.asc",
  "rushYdsAfterContact.desc",
  "rushYds.asc",
  "rushYds.desc",
  "rushYdsPerAtt.asc",
  "rushYdsPerAtt.desc",
  "rushYdsPerGame.asc",
  "rushYdsPerGame.desc",
];

export const defenseSortList = [
  "defCatchAllowed.asc",
  "defCatchAllowed.desc",
  "defDeflections.asc",
  "defDeflections.desc",
  "defForcedFum.asc",
  "defForcedFum.desc",
  "defFumRec.asc",
  "defFumRec.desc",
  "defInts.asc",
  "defInts.desc",
  "defIntReturnYds.asc",
  "defIntReturnYds.desc",
  "defSacks.asc",
  "defSacks.desc",
  "defSafeties.asc",
  "defSafeties.desc",
  "defTDs.asc",
  "defTDs.desc",
  "defTotalTackles.asc",
  "defTotalTackles.desc",
];

export const kickingSortList = [
  "kickPts.asc",
  "kickPts.desc",
  "kickPts.asc",
  "kickPts.desc",
  "fG50PlusAtt.asc",
  "fG50PlusAtt.desc",
  "fG50PlusMade.asc",
  "fG50PlusMade.desc",
  "fGLongest.asc",
  "fGLongest.desc",
  "fGMade.asc",
  "fGMade.desc",
];

export const puntingSortList = [
  "puntsBlocked.asc",
  "puntsBlocked.desc",
  "puntsIn20.asc",
  "puntsIn20.desc",
  "puntLongest.asc",
  "puntLongest.desc",
  "puntTBs.asc",
  "puntTBs.desc",
  "puntNetYdsPerAtt.asc",
  "puntNetYdsPerAtt.desc",
  "puntNetYds.asc",
  "puntNetYds.desc",
  "puntAtt.asc",
  "puntAtt.desc",
  "puntYdsPerAtt.asc",
  "puntYdsPerAtt.desc",
  "puntYds.asc",
  "puntYds.desc",
];

export const leadersSortList = [
  ...receivingSortList,
  ...passingSortList,
  ...rushingSortList,
  ...defenseSortList,
  ...kickingSortList,
  ...puntingSortList,
];

export const dataTypeList = [
  "passing",
  "rushing",
  "defense",
  "punting",
  "kicking",
  "receiving",
];

export const rankList = [
  "defTotalYdsRank.asc",
  "defTotalYdsRank.desc",
  "offTotalYdsRank.asc",
  "offTotalYdsRank.desc",
  "defPassYdsRank.asc",
  "defPassYdsRank.desc",
  "defRushYdsRank.asc",
  "defRushYdsRank.desc",
  "offPassYdsRank.asc",
  "offPassYdsRank.desc",
  "offRushYdsRank.asc",
  "offRushYdsRank.desc",
  "prevRank.asc",
  "prevRank.desc",
  "ptsAgainstRank.asc",
  "ptsAgainstRank.desc",
  "seed.asc",
  "seed.desc",
  "tODiff.asc",
  "tODiff.desc",
  "teamOvr.asc",
  "teamOvr.desc",
  "winPct.asc",
  "winPct.desc",
  "rank.asc",
  "rank.desc",
  "totalLosses.asc",
  "totalLosses.desc",
  "totalWins.asc",
  "totalWins.desc",
];
