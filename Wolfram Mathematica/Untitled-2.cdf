(* Content-type: application/vnd.wolfram.cdf.text *)

(*** Wolfram CDF File ***)
(* http://www.wolfram.com/cdf *)

(* CreatedBy='Mathematica 12.1' *)

(***************************************************************************)
(*                                                                         *)
(*                                                                         *)
(*  Under the Wolfram FreeCDF terms of use, this file and its content are  *)
(*  bound by the Creative Commons BY-SA Attribution-ShareAlike license.    *)
(*                                                                         *)
(*        For additional information concerning CDF licensing, see:        *)
(*                                                                         *)
(*         www.wolfram.com/cdf/adopting-cdf/licensing-options.html         *)
(*                                                                         *)
(*                                                                         *)
(***************************************************************************)

(*CacheID: 234*)
(* Internal cache information:
NotebookFileLineBreakTest
NotebookFileLineBreakTest
NotebookDataPosition[      1088,         20]
NotebookDataLength[      3891,        103]
NotebookOptionsPosition[      4215,         97]
NotebookOutlinePosition[      4650,        114]
CellTagsIndexPosition[      4607,        111]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell[BoxData[
 RowBox[{"Manipulate", "[", 
  RowBox[{
   RowBox[{"Plot", "[", 
    RowBox[{
     RowBox[{
      RowBox[{"Sin", "[", 
       RowBox[{"n", " ", "x"}], "]"}], "+", " ", 
      RowBox[{"Sin", "[", 
       RowBox[{"n", " ", "x"}], "]"}]}], ",", 
     RowBox[{"{", 
      RowBox[{"x", ",", " ", "0", ",", " ", 
       RowBox[{"2", "Pi"}]}], "}"}]}], "]"}], ",", 
   RowBox[{"{", 
    RowBox[{"n", ",", " ", "0.1", ",", " ", "50"}], "}"}]}], "]"}]], "Code",
 CellChangeTimes->{{3.8887443965032697`*^9, 3.888744468918177*^9}, {
  3.8887445363878517`*^9, 3.888744610455544*^9}, {3.88874464258879*^9, 
  3.8887446885897713`*^9}, {3.8887447651806445`*^9, 3.8887448280069957`*^9}},
 CellLabel->"In[18]:=",ExpressionUUID->"70a707df-10f2-46fa-a1a3-1b1e8cf72628"],

Cell[BoxData[
 TagBox[
  StyleBox[
   DynamicModuleBox[{$CellContext`n$$ = 5.3, Typeset`show$$ = True, 
    Typeset`bookmarkList$$ = {}, Typeset`bookmarkMode$$ = "Menu", 
    Typeset`animator$$, Typeset`animvar$$ = 1, Typeset`name$$ = 
    "\"untitled\"", Typeset`specs$$ = {{
      Hold[$CellContext`n$$], 0.1, 50}}, Typeset`size$$ = {
    360., {107., 111.63625460978437`}}, Typeset`update$$ = 0, 
    Typeset`initDone$$, Typeset`skipInitDone$$ = True}, 
    DynamicBox[Manipulate`ManipulateBoxes[
     1, StandardForm, "Variables" :> {$CellContext`n$$ = 0.1}, 
      "ControllerVariables" :> {}, 
      "OtherVariables" :> {
       Typeset`show$$, Typeset`bookmarkList$$, Typeset`bookmarkMode$$, 
        Typeset`animator$$, Typeset`animvar$$, Typeset`name$$, 
        Typeset`specs$$, Typeset`size$$, Typeset`update$$, Typeset`initDone$$,
         Typeset`skipInitDone$$}, "Body" :> 
      Plot[Sin[$CellContext`n$$ $CellContext`x] + 
        Sin[$CellContext`n$$ $CellContext`x], {$CellContext`x, 0, 2 Pi}], 
      "Specifications" :> {{$CellContext`n$$, 0.1, 50}}, "Options" :> {}, 
      "DefaultOptions" :> {}],
     ImageSizeCache->{632., {137., 143.}},
     SingleEvaluation->True],
    Deinitialization:>None,
    DynamicModuleValues:>{},
    SynchronousInitialization->True,
    UndoTrackedVariables:>{Typeset`show$$, Typeset`bookmarkMode$$},
    UnsavedVariables:>{Typeset`initDone$$},
    UntrackedVariables:>{Typeset`size$$}], "Manipulate",
   Deployed->True,
   StripOnInput->False],
  Manipulate`InterpretManipulate[1]]], "Output",
 CellChangeTimes->{{3.8887446722123485`*^9, 3.8887446951409197`*^9}, 
   3.8887447740260677`*^9, 3.8887448306802435`*^9},
 CellLabel->"Out[18]=",ExpressionUUID->"413f79ec-d4db-4939-a32d-800a85559c48"]
}, Open  ]],

Cell[BoxData[""], "Code",
 CellChangeTimes->{{3.888744602848402*^9, 3.888744604141181*^9}},
 CellLabel->"In[19]:=",ExpressionUUID->"e240865c-3e70-49ca-a3d8-5d51907ffe7a"]
},
WindowSize->{1152., 579.6},
WindowMargins->{{
  Automatic, -5.399999999999864}, {-5.399999999999977, Automatic}},
FrontEndVersion->"12.1 for Microsoft Windows (64-bit) (June 9, 2020)",
StyleDefinitions->"Script.nb",
ExpressionUUID->"798f4df8-34bf-4505-ac07-962443297fdd"
]
(* End of Notebook Content *)

(* Internal cache information *)
(*CellTagsOutline
CellTagsIndex->{}
*)
(*CellTagsIndex
CellTagsIndex->{}
*)
(*NotebookFileOutline
Notebook[{
Cell[CellGroupData[{
Cell[1510, 35, 764, 18, 35, "Code",ExpressionUUID->"70a707df-10f2-46fa-a1a3-1b1e8cf72628"],
Cell[2277, 55, 1749, 35, 290, "Output",ExpressionUUID->"413f79ec-d4db-4939-a32d-800a85559c48"]
}, Open  ]],
Cell[4041, 93, 170, 2, 35, "Code",ExpressionUUID->"e240865c-3e70-49ca-a3d8-5d51907ffe7a"]
}
]
*)

(* End of internal cache information *)

(* NotebookSignature @xTjSFyCXAJtKBgGz69aSPeP *)
