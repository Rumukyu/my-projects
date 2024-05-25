def collatz_sequence(n):
    """コラッツ予想の操作を行い、結果の数列と計算回数を返す関数"""
    if n <= 0:
        raise ValueError("nは正の整数でなければなりません。")

    sequence = [n]
    steps = 0
    while n != 1:
        if n % 2 == 0:
            n //= 2
        else:
            n = 3 * n + 1
        sequence.append(n)
        steps += 1
    
    return sequence, steps

def main():
    # ユーザーから正の整数を入力してもらう
    try:
        n = int(input("正の整数を入力してください: "))
        if n <= 0:
            raise ValueError("正の整数でなければなりません。")
    except ValueError as e:
        print(e)
        return
    
    # コラッツ数列と計算回数を計算して出力する
    sequence, steps = collatz_sequence(n)
    print("コラッツ数列:", sequence)
    print("計算回数:", steps)

if __name__ == "__main__":
    main()
