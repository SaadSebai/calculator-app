export function useBasicOperation()
{
    function addition(param_1, param_2)
    {
        return param_1 + param_2;
    }

    function subtraction(param_1, param_2)
    {
        return param_1 - param_2;
    }

    function multiplication(param_1, param_2)
    {
        return param_1 * param_2;
    }

    function division(param_1, param_2)
    {
        return param_2 !== 0
            ? param_1 / param_2
            : "the second parameter can not be a 0 for a division!";
    }

    return { addition, subtraction, multiplication, division };
}
