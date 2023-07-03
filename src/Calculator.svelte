<script>
  import { onMount } from 'svelte';
    import { fetchResult } from '$lib/api';

      let expression = '';
        let result = null;

          const handleClick = (event) => {
              expression += event.target.innerText;
                };

                  const evaluateExpression = async () => {
                      result = await fetchResult(expression);
                        };

                          onMount(() => {
                              document.addEventListener('keydown', handleKeyDown);
                                });

                                  const handleKeyDown = (event) => {
                                      const key = event.key;
                                          if (key.match(/[0-9.+\-*/]/)) {
                                                expression += key;
                                                    } else if (key === 'Enter') {
                                                          evaluateExpression();
                                                              } else if (key === 'Escape') {
                                                                    expression = '';
                                                                          result = null;
                                                                              }
                                                                                };
                                                                                </script>

                                                                                <div>
                                                                                  <input type="text" bind:value={expression} readonly />

                                                                                    <div>
                                                                                        <button on:click={handleClick}>1</button>
                                                                                            <button on:click={handleClick}>2</button>
                                                                                                <button on:click={handleClick}>3</button>
                                                                                                    <button on:click={handleClick}>+</button>
                                                                                                        <button on:click={handleClick}>4</button>
                                                                                                            <button on:click={handleClick}>5</button>
                                                                                                                <button on:click={handleClick}>6</button>
                                                                                                                    <button on:click={handleClick}>-</button>
                                                                                                                        <button on:click={handleClick}>7</button>
                                                                                                                            <button on:click={handleClick}>8</button>
                                                                                                                                <button on:click={handleClick}>9</button>
                                                                                                                                    <button on:click={handleClick}>*</button>
                                                                                                                                        <button on:click={handleClick}>0</button>
                                                                                                                                            <button on:click={handleClick}>.</button>
                                                                                                                                                <button on:click={handleClick}>/</button>
                                                                                                                                                    <button on:click={evaluateExpression}>=</button>
                                                                                                                                                        <button on:click={() => (expression = '')}>C</button>
                                                                                                                                                          </div>

                                                                                                                                                            {#if result !== null}
                                                                                                                                                                <p>Result: {result}</p>
                                                                                                                                                                  {/if}
                                                                                                                                                                  </div>
                                                                                                                                                                  