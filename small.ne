statement
    => var_assign

var_assign
    => %identifier _ %assign _ expr

expr
    => %string
    | %number

#optionalWhiteSpace
 _ => %WS:*

 __ => %WS:+
