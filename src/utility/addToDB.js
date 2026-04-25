const getStoredBook=()=>{
    const storedBookSTR=localStorage.getItem('readList');
    if(storedBookSTR){
       const storedBookData=JSON.parse(storedBookSTR);
       return storedBookData;
    }
    else{
        return [];
    }
}

const addTOStoredDB=(id)=>{
    const storedBookData=getStoredBook();
    if (storedBookData.includes(id)) {
        alert('This book is already in your read list.');
    }
    else{
        storedBookData.push(id);
        const data=JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
    }
}
export {addTOStoredDB,getStoredBook};