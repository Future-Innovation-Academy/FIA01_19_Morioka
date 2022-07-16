import React, { useState,useEffect } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {

    //★追加：リロードしても保存する
    const getData = () => {
        const data = localStorage.getItem("todo");
        if(data){
            return JSON.parse(data);
        }else{
            return [];
        }
    };

    // localStrageに登録されるデータを保持するuseState
    const [data, setData] = useState(getData);

    // 追加ボタン押下で登録
    const handleAddSubmit = (e) =>{      
        e.preventDefault();　// 送信時の画面リロードをさせない

        // データを登録するためのオブジェクト
        let pushData = {
            todoText,
        };

        // 入力したテキストを未完了TODOに追加
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        
        setData([...data, pushData]); //localStrageに登録するためのデータにデータをくっつけて更新
        setTodoText("");　//インプットテキストを空にする
    }

    // ★point useStateの[data]に変更があったらlocalstrageを更新
    useEffect(() => {
        localStorage.setItem("todo",JSON.stringify(data));
    },[data]);

    // インプットエリアのテキスト情報
    const [todoText, setTodoText] = useState("");
    // 未完了のTodo
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    // 完了したTodo
    const [completeTodos, setCompleteTodos] = useState([]);

    // 入力したテキスト
    const onChangeTodoText = (e) => setTodoText(e.target.value);

    //追加
    // const onClickAdd = () => {
    //     if (todoText === "") return;
    //     const newTodos = [...incompleteTodos, todoText];
    //     setIncompleteTodos(newTodos);
    //     setTodoText("");
    // };

    //削除
    const OnClickDelete = (index) => {
        const newTodos = [...incompleteTodos];

        localStorage.removeItem(todos);

        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);

    };

    //完了   
    const onClickComplete = (index) => {
        const newInCompleteTodos = [...incompleteTodos];
        newInCompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newInCompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    //戻る
    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newInCompleteTodos);
    };

    return (
    <>
        {/* 入力テキストエリア */}
        <InputTodo
            todoText={todoText}
            onChange={onChangeTodoText}
            // onClick={onClickAdd}
            handleAddSubmit={handleAddSubmit}
            disabled={incompleteTodos.length >= 5}
        />

        {/* 登録制限5つまで */}
        {incompleteTodos.length >= 5 && (
            <p style={{ color: `red` }}> 登録できるtodoは5つまで</p>
        )}

        {/* 未完了のTODOエリア */}
        <IncompleteTodos
            todos={incompleteTodos}
            onClickComplete={onClickComplete}
            OnClickDelete={OnClickDelete}
        />

        {/* 完了のTODOエリア */}
        <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
        </>
    );
};
