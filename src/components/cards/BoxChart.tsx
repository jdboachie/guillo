// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { getLineData } from '@/lib/data'
import { ResponsiveBoxPlot } from '@nivo/boxplot'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const MyResponsiveBoxPlot = () => {
  const data = [
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.30398330388371
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.549531898193626
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.54573409656029
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.2421975052206395
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.3939641798124915
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.796160431664293
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.114604786475206
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.117692670228286
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.534787268451544
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.191521304983022
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.8225722174478225
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.773613237503452
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.9733828384992043
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.792020531204691
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.046229363084763
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.6696177818603
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.969049141987761
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.769337140759902
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.916925117029787
    },
    {
      "group": "Alpha",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.455000921881128
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 7.311433727153254
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.148745691134532
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.406352813716335
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 7.076704533284553
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.703583523512804
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.867143927406359
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.319623106288316
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.928149753345171
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.048533285562123
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.945318188909601
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 8.555201763536209
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.402604771689766
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.458355310043023
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.335875658567524
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.273957091697695
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.599426783065993
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.555304212546423
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.779915056870081
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.5495808204024994
    },
    {
      "group": "Alpha",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.149825901182721
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.903178728513433
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.67844780698837
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 10.701552395052975
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 9.346786224802726
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.928644810440687
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 9.327963431002653
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 10.43543485381201
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.4144620458877775
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 9.245752594020882
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.506494168033342
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 5.052421502980424
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 9.921152920501227
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.196453863068438
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.639422827548279
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.3278706846399695
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 6.427912428808865
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.7897184746413375
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.887361156791798
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 8.484165252460766
    },
    {
      "group": "Beta",
      "subgroup": "A",
      "mu": 8,
      "sd": 1.4,
      "n": 20,
      "value": 7.54045414810761
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.222371970670931
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 5.907785635433866
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.052944925697465
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 6.755482155207203
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.586882248434003
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 10.086222352147647
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 6.426313875208245
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 5.419731761082422
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 8.380009879045339
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 5.917401128647802
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.370260311917503
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.839004998520821
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 4.371772731065231
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 8.67505743131678
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 9.227446369337791
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 5.714029068173409
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 6.043208421706666
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 6.204248975709593
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 7.7937256444836365
    },
    {
      "group": "Beta",
      "subgroup": "B",
      "mu": 7.5,
      "sd": 1.4,
      "n": 20,
      "value": 8.08480355036842
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 7.904699335707997
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.054235297390153
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.679051302013772
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.015402681750721
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.573341468690213
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.276661392589602
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.066873378341998
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.8227518819252997
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.273517803506292
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.227553393426747
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.774214211567758
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.7108343963599437
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.844395916911582
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.311013527804638
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.031478512381325
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.945112894781758
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.170146828587252
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.357579628356417
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.5864039267464385
    },
    {
      "group": "Gamma",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.060302461870808
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.20577081323482
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 9.14345751269964
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 8.103528344366184
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 8.673294526061923
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 3.051353394698433
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 8.692878966944487
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 6.555408829418401
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.812723277793298
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 8.737818932701176
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.76911367585898
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 6.025695469722727
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.524463941890479
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 5.7455424902002425
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 5.582860852490108
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 6.52440277795885
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.156981212812305
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 5.95928367883713
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 7.523164422373906
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 6.072984094427755
    },
    {
      "group": "Gamma",
      "subgroup": "B",
      "mu": 7.2,
      "sd": 1.8,
      "n": 20,
      "value": 6.238580434987165
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.861879953741024
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.667331279611654
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.2913606073235977
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.819033272547343
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.068527328693171
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.788373733277113
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.429813499591609
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.056080365355959
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.616184344741258
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 6.570420323729456
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.7924432057407436
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 3.983186620897453
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.13855166841098
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.90525055335335
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.115412554391142
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.928432968119969
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.755116733684244
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 4.775039262508356
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.353743003770184
    },
    {
      "group": "Delta",
      "subgroup": "A",
      "mu": 5,
      "sd": 1,
      "n": 20,
      "value": 5.98779916679148
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.830778506060837
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 7.23608571742219
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.612855441590748
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.936329355101855
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.204971228416223
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.576822669334651
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 4.543799441522946
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.1685603708982235
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.237248520512474
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.536277495032413
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.308887262039142
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.502041214799001
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.096325522255973
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.54010075049074
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.739756957487092
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 7.341838400487558
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.004094325199019
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 6.1628784765829705
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.442140008563084
    },
    {
      "group": "Delta",
      "subgroup": "B",
      "mu": 6,
      "sd": 1,
      "n": 20,
      "value": 5.929356563679683
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.8046613325426435
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.467570973022713
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 3.7636379848517283
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.359488200894901
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.5522259655211155
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.801958635641818
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 3.1140689205114227
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.679462176079519
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.790940566167969
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.871129428167944
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 3.810498227379184
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.521275825521841
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.496688706714187
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.71975228695552
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.455001051585485
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 3.6660009064806998
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 6.363783002570482
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.800020392816295
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 4.976399406723459
    },
    {
      "group": "Epsilon",
      "subgroup": "A",
      "mu": 5,
      "sd": 1.4,
      "n": 20,
      "value": 5.405100249926191
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 3.355140662731963
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 5.815512888258297
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 3.907382974064755
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 7.21621160840465
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 7.576703609730774
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 1.6399290270432374
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 8.275753410287766
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 7.5475852512079795
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 6.903873520997053
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 5.698891232683101
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 6.96571488555556
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 9.043191433720585
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 4.9499543172683715
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 9.247981062979981
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 5.784618239423678
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 8.195777562657575
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 10.086774251675985
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 4.787912184892605
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 13.426543588009244
    },
    {
      "group": "Epsilon",
      "subgroup": "B",
      "mu": 6,
      "sd": 3,
      "n": 20,
      "value": 7.701222539299639
    }
  ]

  return (
    <ResponsiveBoxPlot
        data={data}
        margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
        minValue={0}
        maxValue={10}
        subGroupBy="subgroup"
        padding={0.12}
        enableGridX={true}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
            truncateTickAt: 0
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'value',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        colors={{ scheme: 'nivo' }}
        borderRadius={2}
        borderWidth={2}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        medianWidth={2}
        medianColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        whiskerEndSize={0.6}
        whiskerColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        motionConfig="stiff"
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemWidth: 60,
                itemHeight: 20,
                itemsSpacing: 3,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                symbolSize: 20,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  )
}


export default function BoxChart () {
  return (
    <Card className={`w-full`}>
      <CardHeader>
        <CardTitle>Boxplot</CardTitle>
        <CardDescription>Yearly sale results as boxplot</CardDescription>
      </CardHeader>
      <CardContent className='h-[350px] max-sm:h-[250px] transform'>
        <MyResponsiveBoxPlot />
      </CardContent>
    </Card>
  )
}
