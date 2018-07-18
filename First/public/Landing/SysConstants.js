const FunctionType =
{
  Default: { 'Name': 'IPB', 'Description': '住院區', 'IsFunction': false },
  IPB: { 'Name': 'IPB', 'Description': '住院區', 'IsFunction': true },
  EOPD: { 'Name': 'EOPD', 'Description': '急診', 'IsFunction': true },
  OPR: { 'Name': 'OPR', 'Description': '開刀房', 'IsFunction': true },
  RIS: { 'Name': 'RIS', 'Description': '放診科', 'IsFunction': true },
  ENDO: { 'Name': 'ENDO', 'Description': '內視鏡', 'IsFunction': true },
  ACC: { 'Name': 'ACC', 'Description': 'ACC', 'IsFunction': false },
  CMS: { 'Name': 'CMS', 'Description': '全癌個管', 'IsFunction': true },
  OUTP: { 'Name': 'OUTP', 'Description': '出院個管', 'IsFunction': true },
  EMR: { 'Name': 'EMR', 'Description': 'EMR確認', 'IsFunction': false },
  OPD: { 'Name': 'OPD', 'Description': '門診', 'IsFunction': true },
  TEST: { 'Name': 'TEST', 'Description': '軟體測試', 'IsFunction': false },
  NULL: { 'Name': 'NULL', 'Description': '無功能', 'IsFunction': false }
}

export {FunctionType};