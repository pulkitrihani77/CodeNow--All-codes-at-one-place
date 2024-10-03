import { Injectable } from '@angular/core';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { ProgramFormat } from '../../model/codeSyntax';
import { deleteDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db?:any
  constructor() {
    this.db = getFirestore();
  }

  async createCode(program:ProgramFormat){
    try {
      const docRef = await addDoc(collection(this.db, "code"), program);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async createCodeLeetcode(program:ProgramFormat){
    try {
      const docRef = await addDoc(collection(this.db, "leetcode"), program);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async createCodeGFG(program:ProgramFormat){
    try {
      const docRef = await addDoc(collection(this.db, "gfg"), program);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async createCodeCodechef(program:ProgramFormat){
    try {
      const docRef = await addDoc(collection(this.db, "codechef"), program);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async getCodes(){
    let allCodes:any[] = []
    const querySnapshot = await getDocs(collection(this.db, "leetcode"));
    querySnapshot.forEach((doc) => {
      allCodes.push({id:doc.id,...doc.data()})
    });
    return allCodes;
  }
  async getCodesLeetcode(){
    let allCodes:any[] = []
    const querySnapshot = await getDocs(collection(this.db, "leetcode"));
    querySnapshot.forEach((doc) => {
      allCodes.push({id:doc.id,...doc.data()})
    });
    return allCodes;
  }

  async getCodesGFG(){
    let allCodes:any[] = []
    const querySnapshot = await getDocs(collection(this.db, "gfg"));
    querySnapshot.forEach((doc) => {
      allCodes.push({id:doc.id,...doc.data()})
    });
    return allCodes;
  }

  async getCodesCodechef(){
    let allCodes:any[] = []
    const querySnapshot = await getDocs(collection(this.db, "codechef"));
    querySnapshot.forEach((doc) => {
      allCodes.push({id:doc.id,...doc.data()})
    });
    return allCodes;
  }

  async getDocByIdLeetcode(docid:string){
    const docRef = doc(this.db, "leetcode", docid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return {}
    }
  }
  async getDocByIdGFG(docid:string){
    const docRef = doc(this.db, "gfg", docid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return {}
    }
  }
  async getDocByIdCodeChef(docid:string){
    const docRef = doc(this.db, "codechef", docid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return {}
    }
  }

  async deleteDocLeetcode(docid:string){
    await deleteDoc(doc(this.db, "leetcode", docid));
  }
  async deleteDocGFG(docid:string){
    await deleteDoc(doc(this.db, "gfg", docid));
  }
  async deleteDocCodeChef(docid:string){
    await deleteDoc(doc(this.db, "codechef", docid));
  }


  async updateCodeLeetcode(docid:string){

    const docRef = doc(this.db, "leetcode", docid);
    await updateDoc(docRef,{});
  }
  async updateCodeGFG(docid:string){

    const docRef = doc(this.db, "gfg", docid);
    await updateDoc(docRef,{});
  }
  async updateCodeCodeChef(docid:string){

    const docRef = doc(this.db, "codechef", docid);
    await updateDoc(docRef,{});
  }
}



