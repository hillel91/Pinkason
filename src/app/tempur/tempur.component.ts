import { Component, OnInit } from '@angular/core';
/*import webViewer from '@pdftron/webViewer'*/

@Component({
  selector: 'app-tempur',
  templateUrl: './tempur.component.html',
  styleUrls: ['./tempur.component.css']
})
export class TempurComponent implements OnInit {
  food=['durp','burger', 'pizza'];
  firstMenu=['','בטיחות_המטופל', 'רצף_טיפול', 'הטיפול_התרופתי']
  sefetPatient=[' ','יעדים_בינלאומיים_לבטיחות_המטופל', 'זיהוי_מטופל', 'מטופלים_עם_שם_דומה/זהה']
  TherapeuticSequence=[' ','תוכן_נדרש_וזמנים','ציוד הנשמה','הערכת משקל וגובה']
  selected: string="";

  constructor() { }

  ngOnInit() {
  }

}
