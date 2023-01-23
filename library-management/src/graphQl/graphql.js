
import { useQuery,gql } from '@apollo/client';

export const FETCH_STUDENTS = gql`
query students {
    students {
        id,
        name,
        Email,
        password
    }
}
`
export const FETCH_STUDENT_BY_ID = gql`
query studentByID($ID:ID!) {
    studentById(id : $ID) { 
        name,
        Email,
        password,
    }
}`

export const FETCH_BOOKS = gql`
query books {
    books {
        id,
        title,
        author,
        language,
        total,
        remaining
    }
}`

export const FETCH_BOOK_BY_ID = gql`
query booksById($ID:ID!) {
    booksById(id : $ID){
        title,
        author,
        language,
        total,
        remaining
    }
}`

export const ADD_STUDENT = gql`
mutation addStudent($NAME:String!,$EMAIL:String!,$PASSWORD:String!) {
    addStudent(name:$NAME,Email:$EMAIL,password:$PASSWORD) {
        id,
        name,
        Email,
        password
    }
}`

export const UPDATE_STUDENT = gql`
mutation updateStudent($id:ID!,$name:String!,$email:String!,$password:String!){
    updateStudent(id:$id,name:$name,Email:$email,password:$password) {
        id,
        name,
        Email,
        password
    }
}`

export const DELETE_STUDENT = gql`
mutation deleteStudent($ID:ID!) {
    deleteStudent(id : $ID) { 
        id,
        name,
        Email,
        password
    }
}`

export const ADD_BOOK = gql`
mutation addBook($TITLE:String!,$AUTHOR:String!,$LANGUAGE:String!,$TOTAL:Int!,$REMAINING:Int!) {
    addBook(title:$TITLE,author:$AUTHOR,language:$LANGUAGE,total:$TOTAL,remaining:$REMAINING) {
        id
        title,
        author,
        language,
        total,
        remaining
    }
}`

export const UPDATE_BOOK = gql`
mutation updateBook($ID:ID!,$TITLE:String!,$AUTHOR:String!,$LANGUAGE:String!,$TOTAL:Int!,$REMAINING:Int!){
    updateBook(id:$ID,title:$TITLE,author:$AUTHOR,language:$LANGUAGE,total:$TOTAL,remaining:$REMAINING) {
        id
        title,
        author,
        language,
        total,
        remaining
    }
}`

export const DELETE_BOOK = gql`
mutation deleteBook($ID:ID!) {
    deleteBook(id : $ID) { 
        id
        title,
        author,
        language,
        total,
        remaining
    }
}`

export const RETURN_BOOK = gql`
mutation returnBook($ID:ID!,$REMAINING:Int!) {
    returnBook(id : $ID,remaining:$REMAINING) { 
        id
        title,
        author,
        language,
        total,
        remaining
    }
}`

export const FETCH_ISSUEDBOOK = gql`
query IssuedBooks {
    IssuedBooks {
        id,
        name,
        title,
        IssuedDate
        DueDate
        ReturnDate
        isreturn
    }
}`

export const FETCH_ISSUEDBOOK_BY_ID = gql`
query IssuedbookById($ID:ID!) {
    IssuedbookById(id : $ID) { 
        id,
        name,
        title,
        IssuedDate,
        DueDate,
        ReturnDate,
        isreturn,
    }
}`

export const MARK_AS_READ = gql`
mutation markAsRead($ID:ID!,$RETURNDATE:String!,$ISRETURN:Boolean!) {
    markAsRead(id:$ID,ReturnDate:$RETURNDATE,isreturn:$ISRETURN) { 
        id
        name,
        title,
        IssuedDate,
        DueDate,
        ReturnDate,
        isreturn,
    }
}`

export const ADD_ISSUEDBOOK = gql`
mutation addIssuedBook($TITLE:String!,$NAME:String!,$ISSUEDDATE:String!,$DUEDATE:String!,$RETURNDATE:String!,$ISRETURN:Boolean!) {
    addIssuedBook(title:$TITLE,name:$NAME,IssuedDate:$ISSUEDDATE,DueDate:$DUEDATE,ReturnDate:$RETURNDATE,isreturn:$ISRETURN) {
        id
        name,
        title,
        IssuedDate,
        DueDate,
        ReturnDate,
        isreturn,
    }
}`

export const UPDATE_ISSUEDBOOK = gql`
mutation updateIssuedBook($ID:ID!,$TITLE:String!,$NAME:String!,$ISSUEDATE:String!,$DUEDATE:String!,$RETURNDATE:String!,$ISRETURN:Boolean!){
    updateIssuedBook(id:$ID,title:$TITLE,name:$NAME,IssueDate:$ISSUEDATE,DueDate:$DUEDATE,ReturnDate:$RETURNDATE,isreturn:$ISRETURN) {
        id
        name,
        title,
        IssuedDate,
        DueDate,
        ReturnDate,
        isreturn,
    }
}`